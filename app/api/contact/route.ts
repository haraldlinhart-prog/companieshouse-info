import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const BLOCKED_EMAILS = [
  'zazacukeq266@gmail.com',
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
  const trimmed = (str || '').trim();

  // Eine komplette Nachricht, die aus einem einzigen zusammenhängenden Token
  // mit gemischter Groß-/Kleinschreibung besteht (keine Leerzeichen, keine
  // Satzzeichen), ist praktisch nie eine echte menschliche Nachricht — auch
  // wenn der Vokalanteil zufällig hoch genug ist, um die Ratio-Prüfung unten
  // zu unterlaufen (z.B. durch zufällig viele "y"s).
  if (/^[a-zA-ZäöüÄÖÜß]{10,40}$/.test(trimmed) && /[a-zäöüß]/.test(trimmed) && /[A-ZÄÖÜ]/.test(trimmed)) {
    return true;
  }

  const words = (str || '').split(/\s+/).filter(w => w.length >= 6);
  const vowelChars = 'aeiouyAEIOUYäöüÄÖÜàáâãåèéêëìíîïòóôõùúûýÀÁÂÃÅÈÉÊËÌÍÎÏÒÓÔÕÙÚÛÝ';
  for (const word of words) {
    const letters = word.replace(/[^a-zA-ZäöüÄÖÜßàáâãåèéêëìíîïòóôõùúûýÀÁÂÃÅÈÉÊËÌÍÎÏÒÓÔÕÙÚÛÝ]/g, '');
    if (letters.length < 6) continue;
    let vowels = 0;
    for (const ch of letters) if (vowelChars.includes(ch)) vowels++;
    const vowelRatio = vowels / letters.length;
    let transitions = 0;
    for (let i = 1; i < letters.length; i++) {
      const prevUpper = letters[i - 1] === letters[i - 1].toUpperCase() && letters[i - 1] !== letters[i - 1].toLowerCase();
      const curUpper = letters[i] === letters[i].toUpperCase() && letters[i] !== letters[i].toLowerCase();
      if (prevUpper !== curUpper) transitions++;
    }
    const transitionRatio = transitions / (letters.length - 1);
    const vowelThreshold = letters.length >= 14 ? 0.28 : (letters.length >= 11 ? 0.22 : 0.16);
    if (vowelRatio < vowelThreshold && transitionRatio > 0.3) return true;
  }
  if (/\S{61,}/.test(str || '')) return true;
  return false;
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
