import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

/**
 * Handles a POST request to create a new user in the database.
 *
 * @param {Request} request The HTTP request object containing the user data in the request body.
 * @returns {Promise<Response>} The created user object as a JSON response.
 * @throws {Error} If a user with the same email already exists in the database.
 */

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, role, firstname, middlename, lastname } = body;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new Error("Email already exist.");
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        role,
        name: {
          create: {
            firstName: firstname,
            middleName: middlename,
            lastName: lastname,
          },
        },
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    throw new Error(
      "An error occured while adding the user. Please check your connection and try again."
    );
  }
}
