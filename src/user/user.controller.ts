import {Request, Response, NextFunction} from 'express'
import { User } from 'src/entities/user.entity'
import { UserService } from './user.service'

export class UserController{
        static createUser(req: Request, res: Response, next: NextFunction){
try {
    const {name, email, password} = req.body
    const message = UserService.createUser(name, email,password);
    res.status(200).json(message)
} catch (e) {
    next(e)
}
}
static loginUser(req: Request, res: Response, next: NextFunction) {
    try {
        const {email, password} = req.body
        const message = UserService.loginUser(email,password);
        res.status(200).json(message) 
    } catch (e) {
        next(e) 
    }
}
}