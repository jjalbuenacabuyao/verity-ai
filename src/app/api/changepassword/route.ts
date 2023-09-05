import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const { email, currentPassword, newPassword } = body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  const isCorrectPassword = await bcrypt.compare(
    currentPassword,
    user?.hashedPassword as string
  );

  if (!isCorrectPassword) {
    return NextResponse.json({
      isError: true,
      message: "Incorrect password.",
    });
  }

  const newHashedPassword = await bcrypt.hash(newPassword, 12);

  await prisma.user.update({
    where: {
      email,
    },
    data: {
      hashedPassword: newHashedPassword,
    },
  });

  return NextResponse.json({
    isError: false,
    message: "Password updated successfully.",
  });
}
