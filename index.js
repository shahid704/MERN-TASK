const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')

const userController = require('./controller/user') 
const bodyParser = require('body-parser')
const port = 5000
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

mongoose.connect( "mongodb://127.0.0.1:27017/test")

.then(()=> console.log("DB connected"))
.catch(()=> console.log("connection error"))



app.post('/signup', userController.signup)
app.post('/signin', userController.signin)
app.post('/send-otp', userController.sendotp)
app.post('/submit-otp', userController.submitotp)

app.listen(5000, () => {
    console.log(`Backend Running At Port 5000`)
})