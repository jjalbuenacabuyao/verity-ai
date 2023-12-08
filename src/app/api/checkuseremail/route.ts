import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  const user = await client.user.findUnique({
    where: {
      email: email,
    }
  })

  user ? NextResponse.json({ status: 500 }) : NextResponse.json({ status: 200 })
}