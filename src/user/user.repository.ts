import { User } from "../entities/user.entity";

export class UserRepository {
    static createUser(name: string, email: string, password: string) {
        const user = User.create({ name, email, password });
        return user
    }
    static findById(id: number) {
        const user = User.findOne({ where: { id } });
        return user
    }
    static findByEmail(email: string) {
        const user = User.findOne({ where: { email } });
        return user
    }

}