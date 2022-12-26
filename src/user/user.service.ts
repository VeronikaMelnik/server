import { UserRepository } from './user.repository'

export class UserService {
    static async createUser(name: string, email: string, password: string) {
        const conflict = await UserRepository.findByEmail(email)
        if (conflict) {
            throw new Error('user exist')
        }
        const user = UserRepository.createUser(name, email, password);
        return user

    }
    static async loginUser(email: string, password: string) {
        const user = await UserRepository.findByEmail(email)
        if (!user) {
            throw new Error('user not found')
        }
        if (user.password !== password) {
            throw new Error('wrong password')
        }
        return user
    }

    static async checkUser(id:number, email: string, name: string) {
        
    }
} 