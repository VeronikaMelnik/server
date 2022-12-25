import {Optional, Model} from 'sequelize'

type ResponseAttributes = {
    id: number,
    title: string,
    message: string,
}

type ResponseCreationAttributes = Optional<ResponseAttributes, 'id'>;

export interface ResponseModel extends Model<ResponseAttributes, ResponseCreationAttributes>{
    id: number,
    title: string,
    message: string,
}