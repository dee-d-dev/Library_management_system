const express = require('express')
const {connect} = require('./db_connection/connect')
const app = express()
require('dotenv').config()
const router = require('./routes/login')
 
app.use('/', router)

app.listen(6060, ()=>{
    console.log('running')
})

connect(process.env.MONGO_URI)