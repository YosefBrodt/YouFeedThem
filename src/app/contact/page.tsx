"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

function ContactForm() {
  const params = useSearchParams();
  const presetSubject = params.get("subject") ?? "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(presetSubject);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong on our end.");
      }
      setStatus("ok");
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "ok") {
    return (
      <div className="bg-cream text-forest p-10 md:p-14">
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-terracotta font-bold mb-4">
          Thank you
        </p>
        <h2 className="font-heading text-3xl md:text-4xl mb-6 leading-[1.15]">
          Got it. We&rsquo;ll be in touch.
        </h2>
        <p className="text-lg text-forest/85 leading-[1.6] mb-2">
          A note has been sent to Roland and the team. Most replies come within 48 hours.
        </p>
        <p className="text-lg text-forest/85 leading-[1.6]">
          For anything urgent, reach Roland directly at{" "}
          <a
            href="mailto:roland@youfeedthem.com"
            className="underline decoration-gold decoration-2 underline-offset-4 hover:text-gold transition-colors"
          >
            roland@youfeedthem.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bg-cream text-forest p-8 md:p-12 flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="font-sans text-xs uppercase tracking-[0.15em] text-forest/70 font-bold">
            Your name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full py-3 px-4 font-sans text-base text-forest bg-transparent border-2 border-forest/20 outline-none focus:border-forest transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="font-sans text-xs uppercase tracking-[0.15em] text-forest/70 font-bold">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-3 px-4 font-sans text-base text-forest bg-transparent border-2 border-forest/20 outline-none focus:border-forest transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-phone" className="font-sans text-xs uppercase tracking-[0.15em] text-forest/70 font-bold">
            Phone (optional)
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full py-3 px-4 font-sans text-base text-forest bg-transparent border-2 border-forest/20 outline-none focus:border-forest transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-subject" className="font-sans text-xs uppercase tracking-[0.15em] text-forest/70 font-bold">
            Subject
          </label>
          <input
            id="contact-subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What is this about?"
            className="w-full py-3 px-4 font-sans text-base text-forest bg-transparent border-2 border-forest/20 outline-none focus:border-forest transition-colors placeholder:text-forest/40"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="font-sans text-xs uppercase tracking-[0.15em] text-forest/70 font-bold">
          Your message
        </label>
        <textarea
          id="contact-message"
          required
          rows={7}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full py-3 px-4 font-sans text-base text-forest bg-transparent border-2 border-forest/20 outline-none focus:border-forest transition-colors resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-forest text-cream hover:bg-charcoal disabled:opacity-60 disabled:cursor-not-allowed text-base uppercase tracking-wider font-bold py-5 px-10 transition-colors mt-2"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-terracotta font-semibold leading-relaxed">
          {error}{" "}
          You can always email{" "}
          <a
            href="mailto:roland@youfeedthem.com"
            className="underline decoration-gold decoration-2 underline-offset-4"
          >
            roland@youfeedthem.com
          </a>{" "}
          directly.
        </p>
      )}
    </form>
  );
}

export default function Contact() {
  return (
    <main className="w-full pt-28 md:pt-32 bg-forest text-cream pb-24 md:pb-28">
      {/* Hero */}
      <section className="container mx-auto px-8 max-w-7xl mb-16">
        <BlurFade>
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-6">
            Contact
          </p>
        </BlurFade>
        <BlurFade delay={0.1}>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[88px] leading-[0.95] mb-8 max-w-4xl">
            Reach the team.
          </h1>
        </BlurFade>
        <BlurFade delay={0.2}>
          <p className="text-xl md:text-2xl leading-[1.6] text-cream/90 max-w-3xl">
            For questions, partnership conversations, missions trip inquiries, or anything in between. Most replies come within 48 hours.
          </p>
        </BlurFade>
      </section>

      <section className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
          {/* Direct contact details */}
          <BlurFade>
            <div className="flex flex-col gap-10">
              <div>
                <p className="font-sans text-sm uppercase tracking-[0.18em] text-gold font-bold mb-6">
                  Direct
                </p>
                <ul className="flex flex-col gap-6">
                  <li className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.75} />
                    <div>
                      <p className="font-sans text-xs uppercase tracking-[0.15em] text-cream/60 font-bold mb-1">
                        Roland Poirier &middot; Founder
                      </p>
                      <a
                        href="mailto:roland@youfeedthem.com"
                        className="text-lg text-cream hover:text-gold transition-colors"
                      >
                        roland@youfeedthem.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.75} />
                    <div>
                      <p className="font-sans text-xs uppercase tracking-[0.15em] text-cream/60 font-bold mb-1">
                        Media &amp; Communications
                      </p>
                      <a
                        href="mailto:contact@youfeedthem.com"
                        className="text-lg text-cream hover:text-gold transition-colors"
                      >
                        contact@youfeedthem.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.75} />
                    <div>
                      <p className="font-sans text-xs uppercase tracking-[0.15em] text-cream/60 font-bold mb-1">
                        Home base
                      </p>
                      <p className="text-lg text-cream">
                        South Lancaster, Ontario, Canada
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="border-t border-cream/15 pt-10">
                <p className="font-sans text-sm uppercase tracking-[0.18em] text-gold font-bold mb-6">
                  Tax-receipted giving
                </p>
                <p className="text-lg text-cream/85 leading-[1.7] mb-4">
                  Canadian donors looking for a CRA tax receipt should give through our partner The Great Commission Foundation.
                </p>
                <a
                  href="https://gcfcanada.com/partners-in-hope-tanzania/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-forest text-sm uppercase tracking-wider font-bold py-3 px-6 transition-colors"
                >
                  Give via GCF &rarr;
                </a>
              </div>
            </div>
          </BlurFade>

          {/* The form */}
          <BlurFade delay={0.2}>
            <Suspense fallback={<div className="bg-cream/5 h-[600px]" />}>
              <ContactForm />
            </Suspense>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
