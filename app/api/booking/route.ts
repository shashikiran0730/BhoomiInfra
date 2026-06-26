import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format the email body with form data
    const emailBody = `
      <h2>New Site Visit Booking Request</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Contact Time:</strong> ${body.contactTime || "Not specified"}</p>
      <p><strong>Budget:</strong> ${body.budget || "Not specified"}</p>
      <p><strong>Projects Interested In:</strong> ${
        Array.isArray(body.projects) && body.projects.length > 0
          ? body.projects.join(", ")
          : "Not specified"
      }</p>
      <p><strong>Message:</strong></p>
      <p>${body.message || "No message provided"}</p>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "shashikiran2807@gmail.com",
      subject: `New Site Visit Booking - ${body.name}`,
      html: emailBody,
    });

    return NextResponse.json(
      {
        status: "success",
        message: "Booking request received. Email sent successfully.",
        data: {
          name: body.name,
          email: body.email,
          phone: body.phone,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to process booking request",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
