import {Optional, Model} from 'sequelize'

type UserAttributes = {
    id: number,
    role: string,
    name: string,
    email: string,
    password: string,
}

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

export interface UserModel extends Model<UserAttributes, UserCreationAttributes>{
    id: number,
    role: string,
    name: string,
    email: string,
    password: string,
}