import 'dotenv/config';
import { Sequelize } from 'sequelize-typescript'
import { UserRequest } from './entities/request.entity';
import { UserResponse } from './entities/response.entity';
import { User } from './entities/user.entity';

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_HOST),
        models: [User, UserRequest, UserResponse]
    }
)