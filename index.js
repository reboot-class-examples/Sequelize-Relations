require('dotenv').config()

const {
  checkConnection,
  syncModels
} = require('./database/index')

const addRelations = require('./database/relations')

async function startDB() {
  await checkConnection()
  await addRelations()
  await syncModels()
}

startDB()