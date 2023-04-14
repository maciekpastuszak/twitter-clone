import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import { CredentialsProvider } from 'next-auth/providers';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from '@/libs/prismadb';

export default NextAuth({
    
})