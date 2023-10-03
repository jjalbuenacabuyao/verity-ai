import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

/**
 * Handles a POST request to update the password of a user in the database.
 * @param {Request} request - The HTTP request object containing the user's email, current password, and new password.
 * @returns {Promise<object>} - An object indicating the success or failure of the password update.
 * @throws {Error} - If there is an error retrieving or updating the user's password.
 */

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
