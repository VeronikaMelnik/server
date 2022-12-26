import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript';
import { ROLE } from '../constants/user.constants';
import { UserRequest } from './request.entity';
import { UserResponse } from './response.entity';

interface UserCreationAttrs {
    email: string,
    name: string,
    password: string,
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @Column({type: DataType.STRING, defaultValue: ROLE.USER})
    role: ROLE;

    @HasMany(() => UserRequest)
    requests: UserRequest[];

    @HasMany(() => UserResponse)
    responses: UserResponse[];
}