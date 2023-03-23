const Teacher = require('../models/teacher.model')
const Student = require('../models/student.model')

async function getAllTeachers (req, res) {
  try {
    const teachers = await Teacher.findAll()
    return res.status(200).json(teachers)
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function getTeacherById (req, res) {
  try {
    const teacher = await Teacher.findByPk(req.params.id)
    res.status(200).json(teacher)
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function createTeacher(req, res) {
  try {
    const teacher = await Teacher.create(req.body)
    return res.status(200).json({ message: 'teacher created', teacher: teacher })    
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function updateTeacher(req, res) {
  try {
    const result = await Teacher.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (!result) {
      return res.status(404).send('Teacher not found :c')
    }
    return res.status(200).send('teacher updated! :D')
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function deleteTeacher(req, res) {
  try {
    const result = await Teacher.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!result) {
      return res.status(404).send('teacher not found :c')
    }
    return res.status(200).send('teacher deleted >:D')
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function addStudents(req, res) {
  try {
    
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher
}