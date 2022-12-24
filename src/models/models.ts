import {sequelize} from '../db'
import { DataTypes } from 'sequelize'

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    name: {type: DataTypes.STRING, allowNull: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    
})

const UserRequest = sequelize.define('request', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    message: {type: DataTypes.STRING, allowNull: false},
})

const UserResponse = sequelize.define('response', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    message: {type: DataTypes.STRING},
})

User.hasMany(UserRequest)
UserRequest.belongsTo(User)

User.hasMany(UserResponse)
UserResponse.belongsTo(User)

UserRequest.hasMany(UserResponse)
UserResponse.belongsTo(UserRequest)

module.exports = {
    User, 
    UserRequest, 
    UserResponse
}