const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello world!'))

const port = process.env.PORT || 8081

module.exports = app
