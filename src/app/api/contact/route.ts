import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validationResult = contactSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validationResult.error.issues },
        { status: 400 }
      )
    }

    const { name, email, message } = validationResult.data

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email to yourself (notification)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email address
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4f46e5; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-left: 4px solid #0ea5e9; border-radius: 4px;">
            <p style="margin: 0; color: #0369a1;">
              <strong>📧 Reply to:</strong> ${email}
            </p>
          </div>
        </div>
      `,
    }

    // Auto-reply to the sender
    const autoReplyOptions = {
      from: `"Denis Stoica" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            Thank You for Reaching Out!
          </h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for your message! I've received your inquiry and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message</h3>
            <p style="font-style: italic; color: #666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Check out my <a href="https://github.com/DenisStoicaa" style="color: #4f46e5;">GitHub profile</a></li>
            <li>Connect with me on <a href="https://www.linkedin.com/in/denis-andrei-stoica-4788bb387/" style="color: #4f46e5;">LinkedIn</a></li>
            <li>Email me directly at <a href="mailto:denis2006stoica@gmail.com" style="color: #4f46e5;">denis2006stoica@gmail.com</a></li>
          </ul>
          
          <p>Best regards,<br>
          <strong>Denis Stoica</strong><br>
          Full Stack Developer</p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f0f9ff; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              This is an automated response. Please don't reply to this email.
            </p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(autoReplyOptions)

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}