import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, budget, service, subService, message } = req.body;

    // Basic validation
    if (!name || !email || !service || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create a Nodemailer transporter using the provided SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.tytantech.co.ke',
      port: parseInt(process.env.SMTP_PORT || '465', 10),
      secure: true, // Port 465 is secure
      auth: {
        user: process.env.SMTP_USER || 'info@tytantech.co.ke',
        pass: process.env.SMTP_PASSWORD, // Set this in Vercel Environment Variables
      },
    });

    // Construct email content
    const mailOptions = {
      from: process.env.SMTP_USER || 'info@tytantech.co.ke',
      to: 'info@tytantech.co.ke',
      replyTo: email,
      subject: `New Quote Request from ${name} (${subService || service})`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">New Quote Request</h2>
          
          <h3 style="color: #444;">Client Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 5px 0; width: 150px;"><strong>Name:</strong></td><td>${name}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>Email:</strong></td><td>${email}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>Phone:</strong></td><td>${phone || 'N/A'}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>Budget:</strong></td><td>${budget || 'Not specified'}</td></tr>
          </table>
          
          <h3 style="color: #444; margin-top: 20px;">Project Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 5px 0; width: 150px;"><strong>Service:</strong></td><td>${service}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>Specifics:</strong></td><td>${subService || 'N/A'}</td></tr>
          </table>
          
          <h3 style="color: #444; margin-top: 20px;">Client Message</h3>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #666; font-style: italic;">
            This email was sent from the Tyten Tech Quote Request form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Quote request sent successfully!' });
  } catch (error: any) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
}