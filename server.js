const express = require('express');
const app = express();



app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')


const userRouters = require('./routes/users')

app.use('/users', userRouters)

app.listen(3000)