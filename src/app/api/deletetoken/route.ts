import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request)
{
  const { token } = await request.json();

  await client.registrationTokens.delete({
    where: {
      registrationToken: token,
    }
  })

  return NextResponse.json({ status: 200 })
}