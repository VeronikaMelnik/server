import { Request } from 'express';

export interface ExtendedRequest<

ReqParams = unknown,
ResBody = unknown, 
ReqBody = unknown,
ReqQuery = unknown
> extends Request<
ReqParams,
ResBody,
ReqBody,
ReqQuery
> {
    user?: any
}