const Student = require('../models/student.model')

async function createStudent(req, res) {
  try {
    const student = await Student.create(req.body)
    res.status(200).json({ message: 'Student created', student: student })    
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  createStudent
}