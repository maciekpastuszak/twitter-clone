export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse) {
        if (req.method !== 'POST') {
            return req.status(405).end();
        }

        try {
            
        } catch (error) {
            console.log(error)
        }
    }