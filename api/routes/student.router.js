const router = require('express').Router()

const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  addContactInfo,
  createAndSetContact
} = require('../controllers/student.controller')

router.get('/', getAllStudents)
router.get('/:id', getStudentById)

router.post('/', createStudent)
router.post('/:studentId/contact', addContactInfo)
router.post('/:studentId/contact/create', createAndSetContact)


router.put('/:id', updateStudent)

router.delete('/:id', deleteStudent)

module.exports = router