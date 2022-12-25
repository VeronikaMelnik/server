import {sequelize} from '../db'
import { DataTypes } from 'sequelize'
import { ResponseModel } from './types/response.type'

export const UserResponse = sequelize.define<ResponseModel>('response', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    message: {type: DataTypes.STRING},
})


