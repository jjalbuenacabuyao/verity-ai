import NextAuth, { AuthOptions, User } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

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
          // select: {
          //   id: true,
          //   email: true,
          //   name: {
          //     select: {
          //       firstName: true,
          //       middleName: true,
          //       lastName: true,
          //     },
          //   },
          //   hashedPassword: true,
          //   role: true,
          // },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("User does not exist.");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Incorrect password");
        }

        console.log(user)

        return user as User;

        // const name = `${user.name?.firstName} ${user.name?.lastName}`;

        // return {
        //   email: user.email,
        //   name: name
        // };
      },
    }),
  ],
  callbacks: {
    // async signIn({ user, account, profile }) {
    //   if (user.role === 'ADMIN') {
    //     return '/dashboard'
    //   } else if (user.role === 'USER') {
    //     return '/detector'
    //   } else {
    //     return false
    //   }
    // }
  },
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }