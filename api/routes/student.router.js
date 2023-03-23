const router = require('express').Router()

const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/student.controller')

router.get('/', getAllStudents)
router.get('/:id', getStudentById)

router.post('/', createStudent)

router.put('/:id', updateStudent)

router.delete('/:id', deleteStudent)

module.exports = router