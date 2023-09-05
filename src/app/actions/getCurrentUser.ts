import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    const email = session?.user.email as string;

    if (!email){
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: email
      },
      select: {
          name: {
            select: {
              firstName: true,
              middleName: true,
              lastName: true,
            },
          },
          role: true,
        },
    });

    if (!currentUser) {
      return null;
    }

    return {
      email: email,
      name: `${currentUser.name?.firstName} ${currentUser.name?.lastName}`,
      role: currentUser.role
    };
  } catch (error) {
    return null;
  }
}