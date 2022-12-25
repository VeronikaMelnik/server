import { Router } from 'express'
import { UserController } from './user.controller'

export const userRouter = Router()

userRouter.post('signup', UserController.createNewUser)
userRouter.post('signIn', UserController.loginUser)