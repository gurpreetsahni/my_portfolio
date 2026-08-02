import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { ADMIN_EMAIL, ADMIN_PASSWORD_HASH } from "@/lib/adminCredentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        if (credentials.email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
          return null;
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          ADMIN_PASSWORD_HASH
        );

        if (!isValid) {
          return null;
        }

        return {
          id: "1",
          email: ADMIN_EMAIL,
          name: "Admin",
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 1 hour
  },
  pages: {
    signIn: "/admin/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
