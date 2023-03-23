const Class = require('../models/class.model')

async function getAllClasses (req, res) {
  try {
    const classRoom = await Class.findAll()
    return res.status(200).json(classRoom)
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function getClassById (req, res) {
  try {
    const classRoom = await Class.findByPk(req.params.id)
    res.status(200).json(classRoom)
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function createClass(req, res) {
  try {
    const classRoom = await Class.create(req.body)
    return res.status(200).json({ message: 'Class created', classRoom: classRoom })    
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function updateClass(req, res) {
  try {
    const result = await Class.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (!result) {
      return res.status(404).send('Class not found :c')
    }
    return res.status(200).send('Class updated! :D')
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function deleteClass(req, res) {
  try {
    const result = await Class.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!result) {
      return res.status(404).send('Class not found :c')
    }
    return res.status(200).send('Class deleted >:D')
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = {
  getAllClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass
}