import { PrismaClient, Role } from "@prisma/client";

/* Creating a new instance of the PrismaClient, which can be used to perform database operations such as creating, reading, updating, and deleting data. */
const prisma = new PrismaClient();

/**
 * This function creates a user with the given email, hashed password, role, and name using Prisma ORM.
 * @param {string} email - A string representing the email address of the user being created.
 * @param {string} hashedPassword - This parameter is a string that represents the hashed password of the user being created. It is used for security purposes to ensure that the user's password is not stored in plain text in the database.
 * @param {Role} role - The role parameter is a variable of type Role, which specifies the user's role or permission level within the system.
 * @param {string} firstName - A string representing the first name of the user being created.
 * @param {string} middleInitial - The middle initial of the user's name.
 * @param {string} lastName - A string representing the last name of the user being created.
*/

export default async function createUser(
  email: string,
  hashedPassword: string,
  role: Role,
  firstName: string,
  middleInitial: string,
  lastName: string
): Promise<void> {
  try {
    /* Creating a new user in the database using the Prisma ORM. */
    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        role: role,
        name: {
          create: {
            firstName,
            middleInitial,
            lastName,
          },
        },
      },
    });
  } catch (error) {
    throw new Error("Error in creating user: " + error)
  } finally {
    /* Disconnecting the Prisma client from the database after the
    database operation is complete. This is important to prevent resource leaks and ensure that the
    connection is properly closed. */
    await prisma.$disconnect();
  }
}
