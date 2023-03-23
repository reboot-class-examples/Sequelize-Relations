const Student = require('../models/student.model')

async function getAllStudents (req, res) {
  try {
    const students = await Student.findAll()
    return res.status(200).json(students)
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function createStudent(req, res) {
  try {
    const student = await Student.create(req.body)
    return res.status(200).json({ message: 'Student created', student: student })    
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = {
  getAllStudents,
  createStudent
}