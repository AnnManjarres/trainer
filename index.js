require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const ejs = require('ejs')
const passport = require('passport')
const authRoutes = require('./controller/auth')
const homeRoutes = require('./controller/home')


app.use(morgan('tiny'))
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/', authRoutes)
app.use('/home', homeRoutes)


app.listen(4000, () => {
    console.log(`The server is running on port 4000... `)
})

