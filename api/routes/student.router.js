const router = require('express').Router()

const {
  createStudent
} = require('../controllers/student.controller')

router.get('/', (req, res) => {
  res.send('All students')
})

router.get('/:id', (req, res) => {
  res.send(`Student number ${req.params.id} obtained`)
})

router.post('/', createStudent)

router.put('/:id', (req, res) => {
  res.send(`Student ${req.params.id} updated`)
})

router.delete('/:id', (req, res) => {
  res.send(`Student ${req.params.id} deleted`)
})

module.exports = router