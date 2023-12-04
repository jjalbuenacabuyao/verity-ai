import nodemailer from "nodemailer";
import crypto from "crypto";
import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  const token = crypto.randomBytes(20).toString("hex");
  const expiration = new Date(Date.now() + 3600000);

  const user = await client.user.findUnique({
    where: {
      email: email,
    },
    include: {
      resetPasswordToken: true,
    },
  });

  if (user?.resetPasswordToken) {
    await client.token.delete({
      where: {
        userId: user.id,
      },
    });

    // Then connect the new Token
    await client.user.update({
      where: {
        email: email,
      },
      data: {
        resetPasswordToken: {
          create: {
            token: token,
            expiration: expiration,
          },
        },
      },
    });
  } else {
    // If the User doesn't have a Token, just create a new one
    await client.user.update({
      where: {
        email: email,
      },
      data: {
        resetPasswordToken: {
          create: {
            token: token,
            expiration: expiration,
          },
        },
      },
    });
  }


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
    subject: "Password Reset",
    text: `You are receiving this because you have requested the reset of the password for your account.\n\nPlease click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\nhttp://localhost:3000/forgot-password/${token}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n`,
  };

  await transporter.sendMail(mailOptions);

  return NextResponse.json({ status: 200 })
}
