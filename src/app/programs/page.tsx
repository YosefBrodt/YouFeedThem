import { redirect } from "next/navigation";

// Old route. The Villages page was split into /east-africa and /at-home (Jun 8 2026).
// Permanent redirect so any old links or bookmarks land on the East Africa work.
export default function ProgramsRedirect() {
  redirect("/east-africa");
}
