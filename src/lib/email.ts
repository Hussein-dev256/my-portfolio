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

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;background-color:#f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,0.1);">
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 24px 0;color:#0b0b0b;font-size:24px;font-weight:600;">New Contact Form Submission</h2>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e5e5e5;">
                    <strong style="color:#666;">Name:</strong>
                    <div style="margin-top:4px;color:#0b0b0b;">${data.name}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e5e5e5;">
                    <strong style="color:#666;">Email:</strong>
                    <div style="margin-top:4px;color:#0b0b0b;">
                      <a href="mailto:${data.email}" style="color:#0066cc;text-decoration:none;">${data.email}</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e5e5e5;">
                    <strong style="color:#666;">Company:</strong>
                    <div style="margin-top:4px;color:#0b0b0b;">${data.company || "Not provided"}</div>
                  </td>
                </tr>
              </table>
              
              <div style="margin-top:24px;">
                <strong style="color:#666;display:block;margin-bottom:8px;">Message:</strong>
                <div style="background-color:#f9f9f9;padding:16px;border-radius:4px;border-left:4px solid #0066cc;white-space:pre-wrap;color:#0b0b0b;line-height:1.6;">${data.message}</div>
              </div>
              
              <div style="margin-top:32px;padding-top:24px;border-top:1px solid #e5e5e5;color:#999;font-size:14px;">
                <p style="margin:0;">This message was sent from your portfolio contact form at <a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color:#0066cc;text-decoration:none;">${process.env.NEXT_PUBLIC_SITE_URL}</a></p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  await resend.emails.send({
    from: fromAddr,
    to: recipients,
    replyTo: data.email,
    subject: `New Contact Form Submission from ${data.name}`,
    html,
    text: `New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Company: ${data.company || "Not provided"}

Message:
${data.message}

---
This message was sent from your portfolio contact form.`,
  });
}
