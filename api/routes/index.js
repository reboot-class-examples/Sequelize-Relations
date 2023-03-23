const router = require('express').Router()

router.use('/student', require('./student.router'))
router.use('/teacher', require('./teacher.router'))
router.use('/class', require('./class.router'))
router.use('/contact', require('./contact.router'))

module.exports = router