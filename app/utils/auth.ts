import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [

    ]
} satisfies NextAuthOptions