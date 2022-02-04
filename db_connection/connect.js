const mongoose = require('mongoose')

const connect =(url) =>{mongoose.connect(url, ()=> {
    console.log('database connected')
})}

const User_Schema = new mongoose.Schema({
    name: String,
    role:{
        type: String,
        enum: ['Librarian', 'Staff', 'Student']
    }
})

const User = mongoose.model('Librarian', User_Schema)

module.exports = {connect,User}