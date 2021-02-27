import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, {
    providers: [
        Providers.GitHub({
            name: 'github',
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    secret: process.env.SECRET,
    jwt: {
        secret: process.env.JWT
    }
})