import { NextApiRequest, NextApiResponse } from "next"
import nodeHtmlToImage from 'node-html-to-image'
import handlebars from 'handlebars'
import path from 'path'
import getConfig from 'next/config'
import fs from 'fs'

export default async function(req: NextApiRequest, res: NextApiResponse) {

    const { level, challanges, experience } = req.query
    const { serverRuntimeConfig } = getConfig()
    const dir = path.join(serverRuntimeConfig.PROJECT_ROOT,'./public/images/share.hbs')
    const img = fs.readFileSync(dir).toString('utf-8')
    const handle = handlebars.compile(img)
    const html = handle({ level, challanges, experience })
    const image = await nodeHtmlToImage({
        html
    })
    res.writeHead(200, { 'Content-Type': 'image/png' })
    res.end(image, 'binary')
}