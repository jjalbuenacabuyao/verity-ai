import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

/**
 * Retrieves users from a database based on search criteria and pagination.
 *
 * @param req - The HTTP request object containing the URL with query parameters for pagination (`page`) and search criteria (`search`).
 * @returns {Promise<NextResponse>} A JSON response containing either the search results or the paginated users from the database.
 */

export async function GET(req: Request) {
  const url = new URL(req.url);
  const usersPerPage = 5;
  const page = Number(url.searchParams.get("page"));
  const search = url.searchParams.get("search") as string;
  const skip = (page - 1) * usersPerPage;
  const currentUserEmail = url.searchParams.get("useremail");

  if (search !== "") {
    const searchResult = await prisma.user.findMany({
      orderBy: {
        name: {
          firstName: "asc",
        },
      },
      where: {
        email: {
          not: {
            equals: currentUserEmail!,
          }
        },

        role: {
          not: {
            equals: "SUPERADMIN",
          }
        },

        name: {
          OR: [
            {
              firstName: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              middleName: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              lastName: {
                contains: search,
                mode: "insensitive",
              },
            },
          ],
        },
      },
      include: {
        name: true,
      },
    });
    return NextResponse.json(searchResult);
  }

  const users = await prisma.user.findMany({
    where: {
      email: {
        not: {
          equals: currentUserEmail!,
        },
      },

      role: {
        not: {
          equals: "SUPERADMIN",
        },
      },
    },

    take: usersPerPage,

    skip,

    orderBy: {
      name: {
        firstName: "asc",
      },
    },

    include: {
      name: true,
    },
  });

  return NextResponse.json(users);
}
