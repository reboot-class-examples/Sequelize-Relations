const { sequelize } = require('../../database/index')
const { DataTypes } = require('sequelize')

const Teacher = sequelize.define('teacher', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isLongerThan3(value) {
        if (value.length < 3) {
          throw new Error('Name must have at least 3 characters')
        }
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  }
})

module.exports = Teacher