import { ROLE } from "src/constants/user.constants";

export interface UserCreationAttrs {
    role: ROLE,
    name: string,
    email: string,
    password: string,
}