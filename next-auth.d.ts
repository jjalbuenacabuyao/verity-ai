import "next-auth";

declare module "next-auth" {
  interface User {
    name: string;
    id: string;
    hashedPassword: string;
    role: string;
    resetPasswordToken: string;
    logtime: Date;
    Name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
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
