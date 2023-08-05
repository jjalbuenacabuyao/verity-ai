import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET(req: Request) {
  const url = new URL(req.url);

  const usersPerPage = 5;

  const page = Number(url.searchParams.get("page"));

  const skip = (page - 1) * usersPerPage;
  
  const users = await prisma.user.findMany({
    take: usersPerPage,
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