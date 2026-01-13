import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { validatePayload } from "@/lib/validate";
import { sendContactEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rateLimit";

const CSRF_COOKIE_NAME = "csrf_token";
const DEFAULT_RETRY_ATTEMPTS = 2;
const BASE_RETRY_DELAY_MS = 300;

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const ip = forwarded.split(",")[0]?.trim();
    if (ip) return ip;
  }
  return "unknown";
}

export async function GET() {
  const token = crypto.randomUUID();
  const res = NextResponse.json({ ok: true, csrfToken: token });
  res.cookies.set({
    name: CSRF_COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60, // 1 hour
  });
  return res;
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
    csrf,
  } = (body ?? {}) as {
    name?: string;
    email?: string;
    message?: string;
    company?: string;
    _honeypot?: string;
    csrf?: string;
  };

  if (_honeypot && _honeypot.trim().length > 0) {
    return NextResponse.json({ ok: true, message: "Message received." });
  }

  const csrfCookie = (await cookies()).get(CSRF_COOKIE_NAME)?.value;
  if (!csrfCookie || !csrf || csrfCookie !== csrf) {
    return NextResponse.json(
      { ok: false, message: "Invalid CSRF token." },
      { status: 403 },
    );
  }

  const validationError = validatePayload({
    name: String(name || ""),
    email: String(email || ""),
    message: String(message || ""),
  });
  if (validationError) {
    return NextResponse.json({ ok: false, message: validationError }, { status: 400 });
  }

  const apiKeyPresent = !!process.env.RESEND_API_KEY;

  if (!apiKeyPresent) {
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
    async function sendWithRetry(attempts: number) {
      for (let i = 1; i <= attempts; i++) {
        try {
          await sendContactEmail({
            name: name!,
            email: email!,
            message: message!,
            company,
            ip,
          });
          return;
        } catch (err) {
          if (i === attempts) throw err;
          const delay = BASE_RETRY_DELAY_MS * i;
          await new Promise((r) => setTimeout(r, delay));
        }
      }
    }

    await sendWithRetry(DEFAULT_RETRY_ATTEMPTS);

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
