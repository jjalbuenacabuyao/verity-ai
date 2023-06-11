import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextApiRequest } from "next";

const prisma = new PrismaClient();

/* Configuring the API endpoint to disable the default body parsing middleware provided by Next.js. */
export const config = {
  api: {
    bodyParser: false,
  },
};

/**
 * Handles user login by checking the email and password against the database and returning the user if the credentials are correct.
 * @param {NextApiRequest} request - The request object represents the HTTP request that is being made to the server.
 * @returns the user object if the email and password provided are valid, otherwise it throws an error.
 */

export default async function loginHandler(request: NextApiRequest) {
  /* Destructuring the `request.body` object and extracting the `email` and `password` properties from it. */
  const { email, password } = request.body;

  /* Query the database and find a unique user based on the email provided in the request body. */
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) throw new Error("Invalid email.");

  /* Comparing the password provided in the request body with the hashed password stored in the database. It uses the `bcrypt` library to compare the two passwords and returns a boolean value indicating whether they match or not. */
  const isCorrectPassword = await bcrypt.compare(password, user.hashedPassword);

  if (!isCorrectPassword) throw new Error("Wrong password.");

  return user;
}
