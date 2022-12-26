import { UserRequest } from 'src/entities/request.entity'
import { RequestRepository } from './request.repository'

export class RequestService {

    static async createRequest(userId: number) {
        const request = await RequestRepository.findByUserId(userId)
        return request
    }

    if(info) {
        info = JSON.parse(info)
        info.forEach(i =>
            UserRequest.create({
                title: i.title,
                message: i.message,
                userId: user.id
            })
        )
    }

    async findAll(req, res) {
        const { userId } = req.query
        let request;
        if (!userId) {
            request = await UserRequest.findAll()
            throw new Error('user ID does not exist')
        }
        return res.json(200)
    }

}