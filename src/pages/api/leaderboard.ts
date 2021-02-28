import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {

    if(req.method !== 'GET') {
        return res.status(400).json({ msg: 'We only accept get methods' })
    }
    
    const prisma = new PrismaClient()

    const leaderboard = await prisma.user.findMany({
        orderBy: {
            totalExperience: 'desc'
        }
    })

    return res.status(200).json(leaderboard)
}