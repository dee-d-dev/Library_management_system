const mongoose = require('mongoose')

const connect =(url) =>{mongoose.connect(url, ()=> {
    console.log('database connected')
})}

const Librarian_Schema = new mongoose.Schema({
    name: String
})

const Librarian = mongoose.model('Librarian', Librarian_Schema)

module.exports = {connect,Librarian}