import NextAuth, { AuthOptions, User } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

/**
 * Configuration options for NextAuth.
 * 
 * @typedef {Object} AuthOptions
 * @property {PrismaAdapter} adapter - The Prisma adapter for NextAuth.
 * @property {Array} providers - The authentication providers.
 * @property {Object} pages - The pages for sign in.
 * @property {boolean} debug - Whether to enable debug mode.
 * @property {Object} session - The session options.
 * @property {string} secret - The secret for NextAuth.
 */

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("User does not exist");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Incorrect password");
        }

        return user as User;
      },
    }),
  ],

  pages: {
    signIn: "/",
  },

  debug: process.env.NODE_ENV === "development",

  session: {
    strategy: "jwt",
    maxAge: 30 * 60,
  },
  
  secret: process.env.NEXTAUTH_SECRET,
};

/**
 * The NextAuth handler.
 * 
 * @returns {NextAuth} The NextAuth instance.
 */

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }