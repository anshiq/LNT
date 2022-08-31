const express = require('express')
const app = express()
const { products } = require('../data')  // data is a json file
app.get('/', (req, res) => {
  res.json(products)  // to send whole json file to client.
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
