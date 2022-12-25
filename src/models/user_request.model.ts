import {sequelize} from '../db'
import { DataTypes } from 'sequelize'
import { UserResponse } from './user_response.model'
import { RequestModel } from './types/request.type';

export const UserRequest = sequelize.define<RequestModel>('request', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    message: {type: DataTypes.STRING, allowNull: false},
})

UserRequest.hasMany(UserResponse);
UserResponse.belongsTo(UserRequest)
