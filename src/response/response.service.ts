import { ResponseRepository } from './response.repository'

export class UserService {
    static async createResponse(message: string) {
        const request = await ResponseRepository.findByMessage(message)
        if (message != type: string) {
            throw new Error('this is not a correct request')
        }
}
}
