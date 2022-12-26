import { Request, Response, NextFunction } from 'express'
import { User } from 'src/entities/user.entity'
import { UserService } from './user.service'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const generateJwt = (id, email, name) => {
    return jwt.sign(
        { id, email, name },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

export class UserController {
    static async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, email, password } = req.body
            const message = UserService.createUser(name, email, password);

            const candidate = await User.findOne({ where: { email } })
            if (candidate) {
                throw new Error('user exists')
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({ name, email, password: hashPassword });
            const token = generateJwt(user.id, user.email, user.name)
            return res.json({ token })
        } catch (e) {
            next(e)
        }
    }
    static async loginUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ where: { email } })
            if (!user) {
                throw new Error('user not found')
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword) {
                throw new Error('password is wrong')
            }
            const token = generateJwt(user.id, user.email, user.name)
            return res.json({ token })
        } catch (e) {
            next(e)
        }
    }
}