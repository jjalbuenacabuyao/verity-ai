import nodemailer from "nodemailer";
import crypto from "crypto";
import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  const token = crypto.randomBytes(20).toString("hex");
  const expiration = new Date(Date.now() + 3600000);

  await client.registrationTokens.create({
    data: {
      registrationToken: token,
      expiration: expiration,
    },
  });

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    to: email,
    from: process.env.EMAIL_FROM,
    subject: "Registration link",
    text: `You are receiving this because you have requested a VerityAI account.\n\nPlease click on the following link, or paste this into your browser to complete the registration process within one hour of receiving it:\n\nhttps://verity-ai.vercel.app/registration/${token}\n\nIf you did not request this, please ignore this email.\n`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500 });
  }
}
