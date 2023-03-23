require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

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

function startExpress() {
  const app = express()
            .use(express.json())
            .use(morgan('dev'))

            .use('/api', require('./api/routes/index'))

            .listen(process.env.PORT, () => {
              console.log(`Listenting on port ${process.env.PORT}`)
            })
}

async function start() {
  await startDB()
  startExpress()
}

start()