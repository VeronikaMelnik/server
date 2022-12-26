import { Router } from 'express'
import { ResponseController } from './response.controller'

export const responseRouter = Router()

responseRouter.post('createResponse', ResponseController.createResponse)
