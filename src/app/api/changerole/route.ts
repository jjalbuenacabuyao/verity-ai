import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

/**
 * Handles a POST request to update the role of a user in a database using the Prisma ORM.
 *
 * @param request - The HTTP request object containing the user's data.
 * @returns {Promise<NextResponse>} A JSON response object indicating the success of the operation.
 */

export async function POST(request: Request) {
  const body = await request.json();
  const { id, role } = body;

  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      role,
    },
  });

  if (!user) {
    return NextResponse.json({
      success: false,
    });
  }

  return NextResponse.json({
    success: true,
  });
}
