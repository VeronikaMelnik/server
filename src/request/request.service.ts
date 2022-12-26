import { RequestRepository } from './request.repository'

export class RequestService {

    static async createRequest(userId: number) {
        const request = await RequestRepository.findByUserId(userId)
        return request
}
}