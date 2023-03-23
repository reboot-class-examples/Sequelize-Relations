// Add several students to a Teacher
// When we make the request on Postan, we pass an array of ids in the body
// Example Body:
// {
//   "students": [2,3,5]
// }

async function addStudents(req, res) {
  try {
    const teacher = await Teacher.findByPk(req.params.id)

    const students = await Student.findAll({  // Search for all the students requested in the body and save their data inside a new array called 'students'
      where: {
        id: {
          [Op.in]: req.body.students
        }
      }
    })

    if (students.length === 1) {            // If we only pass one student in the array, we excecute a different method.
      await teacher.addStudent(students[0])
    } else {
      await teacher.addStudents(students)
    }
    res.send('Students added!')

  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// Use the same function to create a student, the contact info and establish relation between them
async function createStudent(req, res) {
  try {
    const student = await Student.create({  // Create student
      name: req.body.name,
      email: req.body.email,
    })
    await student.createContact({ address: req.body.address, number: req.body.number })  //Create contact info and add relation
    return res.status(200).json({ message: 'Student created', student: student })

  } catch (error) {
    res.status(500).send(error.message)
  }
}

// Add a friend to a student (check the relations.js file to see more info about this new relation)
async function addFriend(req, res) {
  try {
    const student1 = await Student.findByPk(req.params.id)
    const friend = await Student.findByPk(req.body.friend)

    await student1.addFriend(friend)  //We need to use the addFriend method for both instances.
    await friend.addFriend(student1)

    res.send('Friend added!')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// Get student information with eager loading for Contact and Friend.
async function getOneStudent(req, res) {
  try {
    const student = await Student.findByPk(req.params.id, {
      include: [Contact, { model: Student, as: 'friend' }] // See that to include the Friend's info, we must specifiy firts the model and the the alias it has (the alias was defined in the relations file)

    })
    if (student) {
      return res.status(200).json(student)
    } else {
      return res.status(404).send('Student not found')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}