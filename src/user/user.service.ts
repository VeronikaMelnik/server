import { UserRepository } from "./user.repository";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { USER_ROLE } from "../constants/user.constants";
import { UserToken } from "../types/token.type";
import { EXPIRES_IN, HASH_ROUNDS } from "../constants/auth.constants";

export class UserService {
  static async createNewUser({ email, name, password }: { name: string, email: string, password: string }){
    const conflict = await UserRepository.findByEmail(email)
    if (conflict){
      throw new Error('exist email')
    }
    const hashPassword = await bcrypt.hash(password, HASH_ROUNDS);
    const user = await UserRepository.createNewUser({ email, name, password: hashPassword })
    const token = generateJwt({ email: user.email, id: user.id, role: user.role });
    return token
  }

  static async loginUser({ email, password }: { email: string, password: string }){
    const user = await UserRepository.findByEmail(email);
    if (!user) {
      throw new Error('not found')
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      throw new Error()
    }
    const token = generateJwt({ email: user.email, id: user.id, role: user.role });
    return token;
  }
}

const generateJwt: ({ email, id, role }: { id: number, email: string, role: USER_ROLE })=>string = ({ email, id, role }) => {
  if (!process.env.PRIVATE_KEY) {
    throw new Error();
  }
  const jwtPayload: UserToken = { id, email, role };
  return jwt.sign(
    jwtPayload,
    process.env.PRIVATE_KEY,
    { expiresIn: EXPIRES_IN },
  );
};