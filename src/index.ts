import 'dotenv/config';
import * as express from 'express';
import { sequelize } from './db';
import * as cors from 'cors';
import { router } from './routers';

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())


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