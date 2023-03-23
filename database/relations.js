const Student = require('../api/models/student.model')
const Teacher = require('../api/models/teacher.model.js')
const Contact = require('../api/models/contact.model.js')
const Class = require('../api/models/class.model.js')

function addRelations() {
  Student.hasOne(Contact)
  Contact.belongsTo(Student)

  Teacher.hasMany(Student)
  Student.belongsTo(Teacher)

  Student.belongsToMany(Class, { through: 'student_class' })
  Class.belongsToMany(Student, { through: 'student_class' })
}

module.exports = addRelations