import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST' && req.method !== 'DELETE') {
        return res.status(405).end();
    }

    try {
        const { postId } = req.body;

        const { currentUser } = await serverAuth(req,res)

        if (!postId || typeof postId !== 'string') {
            throw new Error('Invalid ID');
          }
        
    } catch (error) {
        console.log(error)
        return res.status(400).end();
    }
}