import { ResponseRepository } from './response.repository'

export class ResponseService {
    static async createResponse(requestId: number) {
        const response = await ResponseRepository.findAllReqForUser(requestId)
        return response
}
}
