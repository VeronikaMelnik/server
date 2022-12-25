import 'dotenv/config';
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
    process.env.POSTGRES_DB || 'postgres',
    process.env.POSTGRES_USER || 'postgres',
    process.env.POSTGRES_PASSWORD || 'root',
    {
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT)
    }
)