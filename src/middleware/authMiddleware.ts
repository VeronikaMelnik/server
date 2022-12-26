import { NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import { ROLE } from 'src/constants/user.constants';
import { ExtendedRequest } from 'src/types/express.types';

export const authMiddleware = function(role: ROLE) {
    return function (req: ExtendedRequest, res: Response, next: NextFunction) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split()[1]
            if (!token) {
                return res.status(401).json({message:'User is not authorized'})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.normalize.status(403).json({message: 'You do not have access'})) {
                
            }
            req.user = decoded
            next()
        } catch (e) {
            res.status(401).json({message:'User is not authorized'})
        }
    };
}

