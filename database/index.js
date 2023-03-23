const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DBNAME, process.env.USERNAME, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  port: process.env.DBPORT,
  logging: false
})

async function checkConnection() {
  try {
    await sequelize.authenticate()
    console.log('Connection Succesful! :D')
  } catch (error) {
    throw error
  }
}

module.exports = {
  sequelize,
  checkConnection
}