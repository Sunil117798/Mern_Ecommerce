import bcrypt from 'bcryptjs'

const users =[ 
    {
        name: 'Hari Prabhat',
        email: 'Admin@SuperAdmin.com',
        password: bcrypt.hashSync('12345'),
        isAdmin:true
    },
    {
        name: 'hari',
        email: 'hari@gmail.com',
        password: bcrypt.hashSync('54321'),
    },
    {
        name: 'Ram',
        email: 'ram@gmail.com',
        password: bcrypt.hashSync('112233'),
    },
]

export default  users;
