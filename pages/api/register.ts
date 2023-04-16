export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse) {
        if (req.method !== 'POST') {
            return req.status(405).end();
        }

        try {
            const { email. username, name, password} = req.body;
        } catch (error) {
            console.log(error)
            return res.status(400).end()
        }
    }