import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  const user = await client.user.findUnique({
    where: {
      email: email,
    }
  })

  if (user) {
    return NextResponse.json({ status: 500 })
  } else {
    return NextResponse.json({ status: 200 })
  }
}