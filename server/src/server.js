// imports
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const { json } = require('body-parser')
const cors = require('cors')

//ROUTES
const { userRouter, petRouter } = require('./routes')

const app = express()

// app usage of imports
app.use(morgan('dev'))
app.use(helmet())
app.use(json())
app.use(cors())

//APP ROUTES
app.use('/pets', petRouter)
app.use('/users', userRouter)

// test request to see server works properly
app.get('/', (req, res) => {
  res.status(200).send({
    data: 'hello-world',
  })
})

module.exports = app
