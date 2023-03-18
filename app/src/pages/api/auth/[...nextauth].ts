import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/prisma/prisma";
import { decode } from "next-auth/jwt";
import crypto from "crypto";

const credentialProvider = CredentialsProvider({
  // The name to display on the sign in form (e.g. "Sign in with...")
  name: "Credentials",
  // `credentials` is used to generate a form on the sign in page.
  // You can specify which fields should be submitted, by adding keys to the `credentials` object.
  // e.g. domain, username, password, 2FA token, etc.
  // You can pass any HTML attribute to the <input> tag through the object.
  credentials: {
    email: { label: "email", type: "text" },
    password: { label: "Password", type: "password" },
    token: { label: "token", type: "text" },
  },

  async authorize(credentials, req) {
    // Add logic here to look up the user from the credentials supplied
    if (credentials?.token) {
      const decodedData = await decode({
        secret: process.env.SECRETS || "",
        token: credentials.token,
      });
      if (decodedData) {
        const user = prisma.user.findFirst({
          where: { id: decodedData["id"] || "" },
        });
        return user;
      }
    }

    const user = prisma.user.findFirst({
      where: {
        email: credentials?.email,
        password: crypto
          .createHash("md5")
          .update(credentials?.password || "")
          .digest("hex"),
      },
    });

    return user;
  },
});

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // ...add more providers here
    credentialProvider,
  ],
  pages: {
    signIn: "/auth/login",
  },
};
export default NextAuth(authOptions);
