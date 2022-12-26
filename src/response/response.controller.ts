import {Request, Response, NextFunction} from 'express'
import { UserResponse } from 'src/entities/response.entity'
import { ResponseService } from './response.service'

export class ResponseController{
        static createResponse(req: Request, res: Response, next: NextFunction){
try {
    const {message} = req.body
    const result = ResponseService.createResponse(message);
    res.status(200).json(message)
} catch (e) {
    next(e)
}
}
}