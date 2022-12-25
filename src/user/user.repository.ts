import { USER_ROLE } from "../constants/user.constants"
import { User } from "../models/user.model"


export class UserRepository {
  static createNewUser({ email, name, password }: { name: string, email: string, password: string }){
    return User.create({role: USER_ROLE.USER, email, name, password})
  }
  static findByEmail(email: string){
    return User.findOne({where: {email}})
  }
  static findById(id: number){
    return User.findOne({where: {id}})
  }
}