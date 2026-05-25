import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, size, timeline, service, message } =
      body as Record<string, string>;

    // Basic validation
    if (!name || !company || !email || !size || !timeline || !service) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // ── Email transport ──────────────────────────────────────────────────
    // Set GMAIL_USER and GMAIL_PASS (app password) in your environment.
    // Generate a Gmail app password at: https://myaccount.google.com/apppasswords
    // Set CONTACT_EMAIL to the inbox you want notifications sent to.
    // ─────────────────────────────────────────────────────────────────────
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;
    const contactEmail = process.env.CONTACT_EMAIL ?? gmailUser;

    if (!gmailUser || !gmailPass) {
      // Email not configured — log submission and return success
      // This lets the site function before credentials are added.
      console.warn("⚠️  GMAIL_USER / GMAIL_PASS not set. Logging submission:");
      console.log({ name, company, email, phone, size, timeline, service, message });
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Georgia, serif; background: #f8fafc; margin: 0; padding: 32px; color: #0a1628; }
    .card { background: #fff; border-radius: 12px; padding: 36px; max-width: 560px; margin: 0 auto; border: 1px solid #e2e8f0; }
    .badge { display: inline-block; background: #c9a84c1a; color: #9b7a30; font-size: 12px; font-weight: 700;
             letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 12px; border-radius: 99px;
             border: 1px solid #c9a84c33; margin-bottom: 20px; }
    h1 { font-size: 22px; font-weight: 700; margin: 0 0 6px; }
    .sub { color: #64748b; font-size: 14px; margin: 0 0 28px; }
    table { width: 100%; border-collapse: collapse; }
    td { padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; vertical-align: top; }
    td:first-child { color: #64748b; font-weight: 600; width: 38%; padding-right: 12px; }
    td:last-child { color: #0a1628; }
    .footer { text-align: center; margin-top: 28px; font-size: 12px; color: #94a3b8; }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">New Consultation Request</div>
    <h1>Tribridge Partners</h1>
    <p class="sub">A new consultation request has been submitted.</p>
    <table>
      <tr><td>Name</td><td>${name}</td></tr>
      <tr><td>Company</td><td>${company}</td></tr>
      <tr><td>Email</td><td><a href="mailto:${email}" style="color:#c9a84c;">${email}</a></td></tr>
      <tr><td>Phone</td><td>${phone || "—"}</td></tr>
      <tr><td>Company Size</td><td>${size}</td></tr>
      <tr><td>Timeline</td><td>${timeline}</td></tr>
      <tr><td>Service Interest</td><td>${service}</td></tr>
      <tr><td>Message</td><td>${message || "—"}</td></tr>
    </table>
    <div class="footer">tribridgepartners.com · Reply to this email to respond directly to ${name}</div>
  </div>
</body>
</html>
    `.trim();

    await transporter.sendMail({
      from: `"Tribridge Partners" <${gmailUser}>`,
      to: contactEmail,
      replyTo: email,
      subject: `New Consultation Request — ${company} (${timeline})`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send your request. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
