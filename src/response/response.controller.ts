import {Request, Response, NextFunction} from 'express'
import { UserResponse } from 'src/models/response.models'
import { ResponseService } from './response.service'

export class ResponseController{
        static createResponse(req: Request, res: Response, next: NextFunction){
try {
    const {message} = req.body
    const message = ResponseService.createResponse(message);
    res.status(200).json(message)
} catch (e) {
    next(e)
}
}
}