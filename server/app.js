import express, { Router } from 'express'

import { router as userApiRouter } from './apis/user.js'

export const app = express()

app.use(express.json())

app.get('/', (req, res) => res.end('Hello World!'))

const apiRouter = Router()
apiRouter.use('/user', userApiRouter)

app.use('/api', apiRouter)