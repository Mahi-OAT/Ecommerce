import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Ádmin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Mahesh Vadlamudi',
    email: 'mahesh@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

export default users
