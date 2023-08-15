import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const totalUsers = await prisma.user.count();
  return NextResponse.json(totalUsers);
}