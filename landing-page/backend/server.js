import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongo from './mongo.js'
import routers from './router.js'
import { Router } from 'express'

dotenv.config()
const port = process.env.PORT || 4000

const app = express()
const router = Router()

router.use('/', routers)

app.use(express.json())
app.use(cors())
app.use(router)

mongo.connect()

const server = app.listen(port, () => {
  console.log('Server Listening on PORT:', port)
})