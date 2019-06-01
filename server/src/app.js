const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json());

const associates = require('./associates')
const clubs = require('./clubs')

app.use('/associates', associates)
app.use('/clubs', clubs)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server started on port  ${port}`)
})
