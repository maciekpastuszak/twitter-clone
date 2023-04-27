import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method !== 'POST' && req.method !== 'GET') {
        return res.status(405).end();
    }

    try {

    } catch (error) {
        console.log(error);
        return res.satatus(400).end();
    }
}