const router = require('express').Router()

const {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher
} = require('../controllers/teacher.controller')

router.get('/', getAllTeachers)
router.get('/:id', getTeacherById)

router.post('/', createTeacher)

router.put('/:id', updateTeacher)

router.delete('/:id', deleteTeacher)

module.exports = router