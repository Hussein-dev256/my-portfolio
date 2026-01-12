import { Resend } from "resend";

type EmailData = {
  name: string;
  email: string;
  message: string;
  company?: string;
  ip?: string;
};

export async function sendContactEmail(data: EmailData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);
  const fromAddr = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
  const toAddr = process.env.CONTACT_TO_EMAIL || "husseintech256@gmail.com";
  const backupAddr = process.env.CONTACT_BACKUP_EMAIL;
  const recipients = backupAddr ? [toAddr, backupAddr] : toAddr;

  const html = `<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6;color:#0b0b0b;">
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Company:</strong> ${data.company || "N/A"}</p>
    <p><strong>IP:</strong> ${data.ip || "unknown"}</p>
    <hr style="border:none;border-top:1px solid #ddd;margin:12px 0;" />
    <p style="white-space:pre-wrap">${data.message}</p>
  </div>`;

  await resend.emails.send({
    from: fromAddr,
    to: recipients,
    replyTo: data.email,
    subject: `New Contact Form Submission from ${data.name}`,
    html,
    text: `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "N/A"}\nIP: ${data.ip || "unknown"}\n\nMessage:\n${data.message}`,
  });
}
