require('dotenv').config()

const {
  checkConnection
} = require('./database/index')

async function startDB() {
  await checkConnection()
}

startDB()