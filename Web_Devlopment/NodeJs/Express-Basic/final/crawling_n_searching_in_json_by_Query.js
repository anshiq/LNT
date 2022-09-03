const express = require('express')
const app = express()
const { products } = require('../data')
/*
app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    // return { id, name, image }
  })

  res.json(newProducts)
})
*/

app.get('/api/v1/query', (req, res) => {
  //console.log(req.query) // shows the parameters inserted by user after ?   .
  const { name, countlimit } = req.query   // user will input the name and age in the url as parameter as shown in query.js example.
  let sortedProducts = [...products]   // learn more about threedots in ./threedots.js

  if (name) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(name)
    })
  }
  if (countlimit) {
    sortedProducts = sortedProducts.slice(0, Number(countlimit))
  }
  if (sortedProducts.length < 1) { // it is used if parameters dont match above code gonna send whose json file so to avoid that we using this method
    return res.status(200).json({ sucess: true, data: ['No Product Found'] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
