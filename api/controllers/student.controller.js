const Student = require('../models/student.model')
const Contact = require('../models/contact.model')

async function getAllStudents (req, res) {
  try {
    const students = await Student.findAll()
    return res.status(200).json(students)
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function getStudentById (req, res) {
  try {
    const student = await Student.findByPk(req.params.id, {
   //   include: Contact
    })

    const contact = await student.getContact()

    res.status(200).json({studentInfo: student, contactInfo: contact})
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

async function updateStudent(req, res) {
  try {
    const result = await Student.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (!result) {
      return res.status(404).send('Student not found :c')
    }
    return res.status(200).send('Student updated! :D')
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function deleteStudent(req, res) {
  try {
    const result = await Student.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!result) {
      return res.status(404).send('Student not found :c')
    }
    return res.status(200).send('Student deleted >:D')
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function addContactInfo(req, res) {
  try {
    const student = await Student.findByPk(req.params.studentId)
    const contact = await Contact.findByPk(req.body.contactId)

    await student.setContact(contact)

    return res.send('Contact Info added')
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function createAndSetContact(req, res) {
  try {
    const student = await Student.findByPk(req.params.studentId)

    await student.createContact({ address: 'Narnia', number: 666 })

    return res.send('Contact Created and Added')
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  addContactInfo,
  createAndSetContact
}