import { UserRequest } from "../entities/request.entity";

export class RequestRepository {
    static createRequest(message: string, title: string, userId: number) {
        const request = UserRequest.create({ message, title, userId });
        return request
    }
    static findById(id: number) {
        const request = UserRequest.findAll({ where: { id } });
        return request
    }
    static findAllByUserId(userId: number) {
        const request = UserRequest.findAll({ where: { userId } });
        return request
    }
}