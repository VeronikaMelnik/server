import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { UserRequest } from './request.entity';
import { User } from './user.entity';

interface UserResponseCreationAttrs {
    title: string,
    message: string,
}

@Table({ tableName: 'responses' })
export class UserResponse extends Model<UserResponse, UserResponseCreationAttrs> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @Column({ type: DataType.STRING, allowNull: false })
    message: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @ForeignKey(() => UserRequest)
    @Column({ type: DataType.INTEGER })
    requestId: number;
}