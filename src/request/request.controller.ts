import {Request, Response, NextFunction} from 'express'
import { RequestService } from './request.service'

export class RequestController {
    static async createRequest(req: Request, res: Response, next: NextFunction) {
        try {
            const { message } = req.body
            await RequestService.createRequest(message);
            res.status(200).json()
        } catch (e) {
            next(e)
        }
    }
}