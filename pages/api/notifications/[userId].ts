import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    try {
        const { userId } = req.query;

        if(!userId || typeof userId !== 'string') {
            throw new Error('Invallid ID');
        }


    } catch (error) {
        console.log(error)
        return res.status(400).end();
    }
}