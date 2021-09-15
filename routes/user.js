const router = require('express').Router();
const User = require('../models/User')

// home page
router.get('/',(req, res, next)=>{
    res.render('home',{pageTitle:'Home'})
})

// login
router.get('/login',(req, res, next)=>{
    res.render('login',{pageTitle:'Login'})
})

// signup
router.get('/signup',(req, res, next)=>{
    res.render('signup',{pageTitle:'Sign up'})
})


module.exports = router