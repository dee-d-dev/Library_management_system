const {User}= require('../db_connection/connect')

async function createUser(){

    const user = new User({
        name: 'user one',
        role: 'Librarian',
        emaiil:'userone@gmail.com',
        age: 45,
        password: '4567'
    })
    
    const result = await user.save()
    console.log(result)
}

createUser()