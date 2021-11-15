import express, { Router } from 'express'

import { router } from './routes/index.js'

export const app = express()

app.use(express.json())

app.get('/', (req, res) => res.end('Hello World!'))

const apiRouter = Router()
apiRouter.use('/api', router)

app.use('/api', apiRouter)