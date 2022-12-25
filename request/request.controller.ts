import {Request, Response, NextFunction} from 'express'
import { RequestService } from './request.service'

export class RequestController {
    static createRequest(req: Request, res: Response, next: NextFunction) {
        try {
            const { message } = req.body
            const message = RequestService.createRequest(message);
            res.status(200).json(message)
        } catch (e) {
            next(e)
        }
    }
}