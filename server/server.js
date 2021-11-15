import { app } from './app.js'
import { initDatabase } from './lib/database.js'

function startServer() {
  initDatabase()

  const port = process.env.SERVER_PORT;
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

startServer()