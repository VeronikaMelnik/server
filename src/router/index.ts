import { Router } from 'express'
import { userRouter } from '../user/user.router'
import { reqRouter } from '../user_request/request.router'
import { resRouter } from '../user_response/response.router'

export const router = Router()

router.use('auth', userRouter)
router.use('res', resRouter)
router.use('req', reqRouter)
