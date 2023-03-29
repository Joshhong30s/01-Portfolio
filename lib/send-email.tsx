// lib/send-email.js

import nodemailer from 'nodemailer'

async function sendEmail(data: any) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: data.subject,
    text: `
      Name: ${data.name}
      Email: ${data.email}
      Message: ${data.message}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
  } catch (error) {
    throw new Error('Error sending email')
  }
}

export { sendEmail }
