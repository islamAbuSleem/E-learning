const path = require('path')
const cors = require('cors')
const express = require('express');
const app = express();
const morgan = require('morgan')
const user = require('./routes/user');
const mongoose = require('mongoose')
require('dotenv').config()


// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('tiny'))
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname,'public')))

app.use('/',user)



mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log('Connected to DB successfully')
}).catch(e =>{
    console.log('failed to connect to DB ' + e)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT)