import {Router} from 'express'
import { RequestController } from './request.controller'

export const requestRouter = Router()

requestRouter.post('createRequest', RequestController.createRequest)