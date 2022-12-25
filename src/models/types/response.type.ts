import { USER_ROLE } from "../../constants/user.constants";
import { Model, Optional } from 'sequelize';

type ResponseAttributes = {
  id: number,
  title: string,
  message: string,
}
type ResponseCreationAttributes = Optional<ResponseAttributes, 'id'>;

export interface ResponseModel extends Model<ResponseAttributes, ResponseCreationAttributes>{
  id: number,
  title: string,
  message: string,
}