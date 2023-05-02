import { NextApiRequest, NextApiResponse } from "next";

export deafult async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    
}