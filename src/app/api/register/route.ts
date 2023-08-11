import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, role, firstname, middlename, lastname } = body;

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
    console.log(error);
  }
}
