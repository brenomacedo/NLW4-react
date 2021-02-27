import { createConnection } from "typeorm"
import path from 'path'
import User from "../models/User"

export default async function getConnection() {
    const connection = await createConnection({
        type: 'sqlite',
        database: path.resolve(__dirname, '..', 'database.sqlite'),
        entities: [User],
        migrations: [
            path.resolve(__dirname, '..', 'migrations')
        ]
    })
    return connection
}