import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET(req: Request) {
  const url = new URL(req.url);
  const usersPerPage = 5;
  const page = Number(url.searchParams.get("page"));
  const search = url.searchParams.get("search") as string;
  const skip = (page - 1) * usersPerPage;
  
  if (search !== "") {
    const searchResult = await prisma.user.findMany({
      orderBy: {
        name: {
          firstName: "asc",
        }
      },
      where: {
        name: {
          OR: [
            {
              firstName: {
                contains: search,
                mode: "insensitive",
              }
            },
            {
              middleName: {
                contains: search,
                mode: "insensitive",
              }
            },
            {
              lastName: {
                contains: search,
                mode: "insensitive",
              }
            },
          ],
        },
      },
      include: {
        name: true,
      }
    })
    return NextResponse.json(searchResult)
  }

  const users = await prisma.user.findMany({
    take: usersPerPage,
    skip,
    orderBy: {
      name: {
        firstName: "asc",
      }
    },
    include: {
      name: true,
    }
  })
  return NextResponse.json(users)
}