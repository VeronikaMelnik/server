import {Router} from 'express'
import { UserController } from './user.controller'
import {authMiddleware} from '..middleware/authMiddleware'
import { router } from 'routers'

export const userRouter = Router()

userRouter.post('signup', UserController.createUser)
userRouter.post('signin', UserController.loginUser)
userRouter.get('auth', authMiddleware, UserController.check)

module.exports = router