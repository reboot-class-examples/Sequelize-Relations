const { sequelize } = require('../../database/index')
const { DataTypes } = require('sequelize')

const Contact = sequelize.define('contact', {
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  number: {
    type: DataTypes.INTEGER
  }
})

module.exports = Contact