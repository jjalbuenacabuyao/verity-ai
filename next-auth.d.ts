import "next-auth";

declare module "next-auth" {
  interface User {
    name: string;
    id: string;
    hashedPassword: string;
    role: string;
  }

  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
    };
  }
}
