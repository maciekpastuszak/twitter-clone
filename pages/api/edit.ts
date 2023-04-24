import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'PATCH') {
        return res.status(405).end();
    }

    try {
        const { currentUser } = await serverAuth(req,res);

        const { name, username, bio, profilImage, converImage } = req.body;
        
        if (!name || username) {
            throw new Error('Missing fields');
        }
    
    } catch (error) {
        console.log(error)
        return res.status(400).end();
    }
}