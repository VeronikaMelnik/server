import { USER_ROLE } from "../../constants/user.constants";
import { Model, Optional } from 'sequelize';

type RequestAttributes = {
  id: number,
  title: string,
  message: string,
}
type RequestCreationAttributes = Optional<RequestAttributes, 'id'>;

export interface RequestModel extends Model<RequestAttributes, RequestCreationAttributes>{
  id: number,
  title: string,
  message: string,
}