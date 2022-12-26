import { Request, Response, NextFunction } from 'express'
import { RequestRepository } from './request.repository';
import { RequestService } from './request.service'

export class RequestController {
    static async createRequest(req: Request, res: Response, next: NextFunction) {
        try {
            let { message } = req.body
            await RequestService.createRequest(message);
            res.status(200).json()
        } catch (e) {
            next(e)
        }
    }
    static async findAllByUserId(req: Request, res: Response, next: NextFunction) {
        try {
            let { userId } = req.body
            RequestRepository.findAllByUserId(userId);
            res.status(200).json()
        } catch (e) {
            next(e)
        }
    }

}