const Contact = require('../models/contact.model')

async function getAllContacts (req, res) {
  try {
    const contacts = await Contact.findAll()
    return res.status(200).json(contacts)
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function getContactById (req, res) {
  try {
    const contact = await Contact.findByPk(req.params.id)
    res.status(200).json(contact)
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function createContact(req, res) {
  try {
    const contact = await Contact.create(req.body)
    return res.status(200).json({ message: 'contact created', contact: contact })    
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function updateContact(req, res) {
  try {
    const result = await Contact.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (!result) {
      return res.status(404).send('Contact not found :c')
    }
    return res.status(200).send('Contact updated! :D')
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function deleteContact(req, res) {
  try {
    const result = await Contact.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!result) {
      return res.status(404).send('Contact not found :c')
    }
    return res.status(200).send('Contact deleted >:D')
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
}