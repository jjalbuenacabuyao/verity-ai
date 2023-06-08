import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function loginHandler(request: Request) {
  const formData = await request.json();
  const { email, hashedPassword } = formData;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) throw new Error("Invalid email.");

  const isCorrectPassword = await bcrypt.compare(hashedPassword, user.hashedPassword);

  if (!isCorrectPassword) throw new Error("Wrong password.");

  return user;
}