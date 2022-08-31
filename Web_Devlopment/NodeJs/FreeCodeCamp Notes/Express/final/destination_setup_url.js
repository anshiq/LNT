const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('pasdfghjksdfghjsdfghdfghertyuxcvb')
})
app.get('/about', (req, res) => {
  res.send('pasdfghjsdfghdfghertyuxcvb')

})

app.all('*', (req, res) => {   // * means for alll the other input destination other tham above it gona show resourse not found
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
