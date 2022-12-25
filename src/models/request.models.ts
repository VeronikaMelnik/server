import {sequelize} from '../db'
import { DataTypes } from 'sequelize'
import { User } from './user.models'
import { UserResponse } from './response.models'
import { RequestModel } from './types/request.type'

export const UserRequest = sequelize.define<RequestModel>('request', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    message: {type: DataTypes.STRING, allowNull: false},
})

UserRequest.hasMany(UserResponse)
UserResponse.belongsTo(UserRequest)