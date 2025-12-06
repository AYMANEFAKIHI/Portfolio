import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    let transporter;
    let usingTestAccount = false;

    // If GMAIL credentials are present, use them. Otherwise create an Ethereal test account for local/dev testing.
    if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });
    } else {
      console.log('GMAIL_USER or GMAIL_PASS not set, using Ethereal');
      // Create ethereal test account (only for development/testing)
      const testAccount = await nodemailer.createTestAccount();
      usingTestAccount = true;
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    const mailOptions = {
      from: process.env.GMAIL_USER, // Use your authenticated email as sender
      replyTo: email, // Set the "Reply-To" to the user's email
      to: process.env.GMAIL_USER || 'faymane12@gmail.com', // receiver address
      subject: `New message from ${name} via portfolio contact form`,
      text: `You have received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);

    // If using Ethereal, provide the preview URL so devs can inspect the message
    if (usingTestAccount) {
      const preview = nodemailer.getTestMessageUrl(info) || null;
      console.log('Ethereal preview URL:', preview);
      return res.status(200).json({ message: 'Message sent (ethereal test account)', preview });
    }

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    // Send back error message for easier debugging in dev. Avoid exposing sensitive details in production.
    const clientMessage = process.env.NODE_ENV === 'production'
      ? 'Error sending message' // generic in production
      : `Error sending message: ${error.message || String(error)}`;
    return res.status(500).json({ message: clientMessage });
  }
}
