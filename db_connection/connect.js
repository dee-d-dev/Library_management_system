const mongoose = require('mongoose')

const connect =(url) =>{mongoose.connect(url, ()=> {
    console.log('database connected')
})}

const User_Schema = new mongoose.Schema({
    name: String,
    role:String,
    email: String,
    age: Number,
    password: String
})

const User = mongoose.model('Librarian', User_Schema)

module.exports = {connect,User}