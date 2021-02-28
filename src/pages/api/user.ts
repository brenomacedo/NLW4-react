import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {

    if(req.method !== 'PUT') {
        return res.status(400).json({ msg: 'we only accept put methods' })
    }

    const { sub, level, currentExperience, challangesCompleted } = req.body

    const prisma = new PrismaClient()

    const oldUser = await prisma.user.findFirst({
        where: {
            sub
        }
    })

    let totalExperience = 0

    for(let i = 1; i <= level - 1; i++) {
        totalExperience += Math.pow((i + 1)*4, 2)
    }

    totalExperience += currentExperience

    await prisma.user.update({
        where: {
            id: oldUser.id
        },
        data: {
            currentExperience, level, completedChallanges: challangesCompleted,
            totalExperience
        }
    })

    await prisma.$disconnect()

    return res.status(200).json({ msg: "successfully updated" })
}