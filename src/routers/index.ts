import { Router } from 'express'
import { userRouter } from '../user/user.router'

export const router = Router()

router.use('auth', userRouter)