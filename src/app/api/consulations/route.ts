import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { fullName, companyName, businessCategory, mobile } = await req.json();

    if (!fullName || !companyName || !businessCategory || !mobile) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // SMTP transporter using Gmail App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail app password
      },
    });

    await transporter.sendMail({
      from: `"Consultation Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // recipient
      subject: "New Consultation Form Submission",
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Business Category:</strong> ${businessCategory}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
      `,
    });

    return NextResponse.json({ message: "Consultation email sent successfully!" });
  } catch (error) {
    console.error("Consultation email sending failed:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
