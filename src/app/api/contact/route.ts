import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

function escape(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const subject = (body.subject ?? "").trim() || "New message from youfeedthem.com";
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "That email address looks off." }, { status: 400 });
  }
  if (message.length > 6000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  // Lightweight spam guard: reject if message has too many URLs.
  const urlCount = (message.match(/https?:\/\//gi) ?? []).length;
  if (urlCount > 3) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.CONTACT_FROM_EMAIL ?? "YFT Website <onboarding@resend.dev>";
  const toAddress = process.env.CONTACT_TO_EMAIL ?? "roland@youfeedthem.com";

  const html = `
    <div style="font-family: -apple-system, system-ui, sans-serif; color: #1a2e24; line-height: 1.6;">
      <h2 style="font-family: Georgia, serif; color: #1a2e24; margin-bottom: 16px;">New message from youfeedthem.com</h2>
      <p><strong>Subject:</strong> ${escape(subject)}</p>
      <p><strong>From:</strong> ${escape(name)} &lt;${escape(email)}&gt;</p>
      ${phone ? `<p><strong>Phone:</strong> ${escape(phone)}</p>` : ""}
      <hr style="border: none; border-top: 1px solid #e5e0d3; margin: 20px 0;" />
      <p style="white-space: pre-wrap;">${escape(message)}</p>
    </div>
  `.trim();

  const text = `Subject: ${subject}\nFrom: ${name} <${email}>${phone ? `\nPhone: ${phone}` : ""}\n\n${message}`;

  if (!apiKey) {
    // Graceful fallback: log to server output so the form is still useful in dev / before env vars are wired.
    console.warn("[contact] RESEND_API_KEY missing — logging message to stdout instead of sending.");
    console.warn("[contact]", { name, email, phone, subject, message });
    return NextResponse.json({ ok: true, delivered: "logged" });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [toAddress],
        reply_to: email,
        subject: `[YFT] ${subject}`,
        html,
        text,
      }),
    });
    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] Resend error", res.status, detail);
      return NextResponse.json(
        { error: "We couldn't send your message. Please email roland@youfeedthem.com directly." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true, delivered: "email" });
  } catch (err) {
    console.error("[contact] Network error", err);
    return NextResponse.json(
      { error: "Network error. Please email roland@youfeedthem.com directly." },
      { status: 502 }
    );
  }
}
