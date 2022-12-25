import { UserResponse } from "src/models/response.models";

export class UserRepository {
    static createResponse(message: string) {
        static create(message: string) {
        const response = UserResponse.create({ message });
        return response
    }
    static findById(id: number) {
        const user = UserResponse.findOne({where: {id}});
        return user
    }
    static findByEmail(email: string) {
        const response = UserResponse.findOne({where: {email}});
        return response
    }
}
}