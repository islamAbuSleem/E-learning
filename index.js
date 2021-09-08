const path = require('path')
const cors = require('cors')
const express = require('express');
const app = express();

const user = require('./routes/user');

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname,'public')))

app.use('/',user)

const PORT = process.env.PORT || 3000;
app.listen(PORT)