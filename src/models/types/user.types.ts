import { USER_ROLE } from "../../constants/user.constants";
import { Model, Optional } from 'sequelize';
type UserAttributes = {
  id: number,
  role: USER_ROLE,
  name: string,
  email: string,
  password: string,
}
type UserCreationAttributes = Optional<UserAttributes, 'id'>;

export interface UserModel extends Model<UserAttributes, UserCreationAttributes>{
  id: number,
  role: USER_ROLE,
  name: string,
  email: string,
  password: string,
}