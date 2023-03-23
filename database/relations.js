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

  // We can add a new relation, so we can check a student's friends.
  // Friends are still students, so we would be creating a Many to Many realtion between students and other students:

  Student.belongsToMany(Student, { through: 'Friends', as: 'friend' })
  
  // We create a junction table called 'Friends'. One student will have the alias 'friend', so Sequelize will create the column 'friendId'.
  // The other student will have the column 'studentId'.
}

module.exports = addRelations