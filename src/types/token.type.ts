import { USER_ROLE } from "../constants/user.constants";

export type UserToken = {
  id: number;
  email: string;
  role: USER_ROLE;
}