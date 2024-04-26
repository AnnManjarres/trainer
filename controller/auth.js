const express = require('express')
const router = express.Router()


router.get('/auth', (req, res) => {
    res.render('auth')
})

router.get('/register', (req, res) => {
    res.render('register')
})


module.exports = router