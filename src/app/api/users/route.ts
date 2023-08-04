import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET(req: Request) {
  const url = new URL(req.url);

  const page = Number(url.searchParams.get("page"));

  const skip = (page - 1) * 4;
  
  const users = await prisma.user.findMany({
    take: 4,
    skip,
    orderBy: {
      id: 'asc',
    },
    include: {
      name: true,
    }
  })
  if (users.length === 0) {
    return NextResponse.json(null)
  }
  return NextResponse.json(users)
}