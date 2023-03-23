const { sequelize } = require('../../database/index')
const { DataTypes } = require('sequelize')

const Class = sequelize.define('class', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Class