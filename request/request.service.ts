import { RequestRepository } from './request.repository'

export class UserService {

    static async createRequest(message: string) {
        const request = await RequestRepository.findByMessage(message)
        if (message != type: string) {
            throw new Error('this is not a correct request')
        }
}
}