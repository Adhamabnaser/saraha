import express from 'express'
import dotenv from 'dotenv'
import { connectToDb } from './db/connection.js'
import { bootstrap } from './bootstrap.js'
dotenv.config()

const app = express()
const port = 3000

bootstrap(app)
connectToDb()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
