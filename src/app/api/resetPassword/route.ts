import client from "@/app/libs/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { id, password } = await request.json();

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    await client.user.update({
      where: {
        id: id,
      },
      data: {
        hashedPassword: hashedPassword,
      },
    });

    await client.token.delete({
      where: {
        userId: id,
      },
    });

    return NextResponse.json({ status: 200 });
  } catch (error: any) {
    return NextResponse.json({ status: 500 });
  }
}
