const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const idRouter = require('./routes/id')
const billRouter = require('./routes/bill')
const testRouter = require('./routes/test_route')
const notFoundRouter = require('./routes/404')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/id', idRouter)
app.use('/bill', billRouter)
app.use('/test', testRouter)
app.use('*', notFoundRouter)

module.exports = app
