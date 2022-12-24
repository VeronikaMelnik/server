import 'dotenv/config';
import * as express from 'express';
import {sequelize} from './db'

const PORT = process.env.PORT || 5000
console.log(process.env.PORT)
const app = express()

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()