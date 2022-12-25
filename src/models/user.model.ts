import {sequelize} from '../db'
import { DataTypes } from 'sequelize'
import { UserRequest } from './user_request.model'
import { UserResponse } from './user_response.model';
import { UserModel } from './types/user.types';

export const User = sequelize.define<UserModel>('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    name: {type: DataTypes.STRING, allowNull: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    
})

User.hasMany(UserRequest);
UserRequest.belongsTo(User);

User.hasMany(UserResponse);
UserResponse.belongsTo(User);