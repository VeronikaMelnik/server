import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './user.entity';

interface UserRequestCreationAttrs {
    title: string,
    message: string,
}

@Table({tableName: 'requests'})
export class UserRequest extends Model<UserRequest, UserRequestCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, allowNull: false})
    message: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;
}