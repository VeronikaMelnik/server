import {sequelize} from '../db'
import { DataTypes } from 'sequelize'
import { UserRequest } from './request.models'
import { UserResponse } from './response.models'
import { UserModel } from './types/user.type'
import { ROLE } from 'src/constants/user.constants'

export const User = sequelize.define<UserModel>('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    role: {type: DataTypes.STRING, defaultValue: ROLE.USER},
    name: {type: DataTypes.STRING, allowNull: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    
})

User.hasMany(UserRequest)
UserRequest.belongsTo(User)

User.hasMany(UserResponse)
UserResponse.belongsTo(User)