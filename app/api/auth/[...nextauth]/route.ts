
import { authOptions } from "@/app/libs/config/auth/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions)   as never;

export { handler as GET, handler as POST  };