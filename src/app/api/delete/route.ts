import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

/**
 * Handles a POST request to delete a user from the database.
 *
 * @param request - The request object containing the JSON payload with the user ID.
 * @returns {Promise<NextResponse>} A JSON response indicating success.
 */

export async function POST(request: Request) {
  const body = await request.json();
  const { id } = body;

  const deletedUser = await prisma.user.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json("Success");
}
