const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
})

module.exports.User = mongoose.model('User',userSchema)