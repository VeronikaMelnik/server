import { Router } from 'express'
import { UserController } from './user.controller'

export const userRouter = Router()

userRouter.post('signup', UserController.createUser)
userRouter.post('signin', UserController.loginUser)