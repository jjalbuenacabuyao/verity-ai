import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const { search } = body;

  const searchedUser = await prisma.user.findMany({
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
    },
  });

  return searchedUser.length > 0
    ? NextResponse.json(searchedUser)
    : NextResponse.json("User does not exist.");
}
