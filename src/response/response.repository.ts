import { UserResponse } from "src/entities/response.entity";

export class ResponseRepository {
    static createResponse(message: string, title: string, userId: number) {
        const response = UserResponse.create({ message, title, userId });
        return response
    }
    static findById(id: number) {
        const user = UserResponse.findAll({ where: { id } });
        return user
    }
    static findAllReqForUser(requestId: number) {
        const response = UserResponse.findAll({ where: { requestId } });
        return response
    }
}
