const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('All students')
})

router.get('/:id', (req, res) => {
  res.send(`Student number ${req.params.id} obtained`)
})

router.post('/', (req, res) => {
  res.send('Student created')
})

module.exports = router