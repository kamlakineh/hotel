import nodemailer from 'nodemailer';

export async function sendEmail({ to, subject, html }) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or use 'hotmail', 'Yahoo', etc.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
}
