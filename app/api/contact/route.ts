import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const BLOCKED_EMAILS = [
  "edipajulodev85@gmail.com",
];

function normalizeEmail(email: string) {
  const [local, domain] = email.toLowerCase().trim().split("@");
  if (!domain) return email.toLowerCase().trim();
  let normalizedLocal = local.replace(/\./g, "");
  if (domain === "gmail.com") {
    normalizedLocal = normalizedLocal.split("+")[0];
  }
  return `${normalizedLocal}@${domain}`;
}

function isGibberish(str: string) {
  const s = str.replace(/\s/g, "");
  if (s.length < 6) return false;
  const vowels = (s.match(/[aeiouAEIOU]/g) || []).length;
  const vowelRatio = vowels / s.length;
  let caseTransitions = 0;
  for (let i = 1; i < s.length; i++) {
    const prevUpper = s[i - 1] === s[i - 1].toUpperCase() && /[a-zA-Z]/.test(s[i - 1]);
    const curUpper = s[i] === s[i].toUpperCase() && /[a-zA-Z]/.test(s[i]);
    if (prevUpper !== curUpper) caseTransitions++;
  }
  const caseTransitionRatio = caseTransitions / s.length;

  let vowelThreshold = 0.28;
  if (s.length <= 10) vowelThreshold = 0.16;
  else if (s.length <= 13) vowelThreshold = 0.22;

  return vowelRatio < vowelThreshold && caseTransitionRatio > 0.3;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message, company, elapsed, honeypot } = body;

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }
  if (typeof elapsed !== "number" || elapsed < 3) {
    return NextResponse.json({ ok: true });
  }
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Bitte alle Felder ausfüllen." }, { status: 400 });
  }

  const normalized = normalizeEmail(email);
  if (BLOCKED_EMAILS.includes(normalized)) {
    return NextResponse.json({ ok: true });
  }

  const fullText = `${name} ${message}`;
  if (isGibberish(name) || (message.length < 60 && isGibberish(message))) {
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "noreply@pan21.com",
      to: process.env.CONTACT_TO_EMAIL || "registry@pan21.com",
      replyTo: email,
      subject: `Companies House Info – Kontaktanfrage von ${name}${company ? " (" + company + ")" : ""}`,
      text: `Name: ${name}\nE-Mail: ${email}\nUnternehmen: ${company || "-"}\n\n${message}`,
    });
  } catch (err) {
    return NextResponse.json({ error: "Versand fehlgeschlagen." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
