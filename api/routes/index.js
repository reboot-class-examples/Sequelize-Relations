const router = require('express').Router()

router.use('/student', require('./student.router'))

module.exports = router