import { UserRequest } from 'src/entities/request.entity'
import { RequestRepository } from './request.repository'

export class RequestService {

    static async createRequest(userId: number) {
        const request = await RequestRepository.findAllByUserId(userId)
        return request
    }

    static findAllByUserId(userId: number) {
        const request = RequestRepository.findAllByUserId(userId)
            return request
    }

}
