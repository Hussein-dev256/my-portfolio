import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rateLimit";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const ip = forwarded.split(",")[0]?.trim();
    if (ip) return ip;
  }
  return "unknown";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const { limited } = rateLimit(`contact:${ip}`);
  if (limited) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "You have reached the limit for contact form submissions. Please try again later.",
      },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const {
    name,
    email,
    message,
    company,
    _honeypot,
  } = (body ?? {}) as {
    name?: string;
    email?: string;
    message?: string;
    company?: string;
    _honeypot?: string;
  };

  if (_honeypot && _honeypot.trim().length > 0) {
    return NextResponse.json({ ok: true, message: "Message received." });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please provide your name, email, and a message.",
      },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (name.length > 120 || email.length > 160 || message.length > 5000) {
    return NextResponse.json(
      { ok: false, message: "One or more fields are too long." },
      { status: 400 },
    );
  }

  if (!resend || !process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
    console.error("Contact form misconfigured: missing email environment variables.");
    return NextResponse.json(
      {
        ok: false,
        message:
          "Contact form is temporarily unavailable. Please try again later or reach out via social links.",
      },
      { status: 500 },
    );
  }

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `New portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nIP: ${ip}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Error sending contact email", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Something went wrong while sending your message. Please try again later.",
      },
      { status: 500 },
    );
  }
}
