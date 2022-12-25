import { UserRequest } from "src/models/request.models";

export class RequestRepository {
    static createRequest(text: string) {
        const request = UserRequest.create({ message });
        return request
    }
    static findById(id: number) {
        const request = UserRequest.findMany({where: {id}});
        return request
    }
    static findByEmail(email: string) {
        const request = UserRequest.findMany({where: {email}});
        return request
    }

}