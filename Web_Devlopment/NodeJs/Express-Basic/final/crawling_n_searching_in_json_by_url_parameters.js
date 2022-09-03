const express = require('express')
const app = express()
const { products } = require('../data')

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
app.get('/api/products/:productID', (req, res) => {  // :productID is like a variable in the url whose value will keep changing.
  /*
  in this case :productID can be = 1,2,3,4,5. as given by ser in browser.
  */
  // req.params is the string given by user/browser other the app.get defined url.
 // console.log(req.params)  // output= { productID: 'A Number' }
  const { productID } = req.params
 // console.log(productID) // selected the key productID whose value is 'A number'

  const singleProduct = products.find(   // time to crawl into data.json file.
    (product) => product.id === Number(productID)  // means find product in which id = Number(productID)  exist and return that product.
  )
  if (!singleProduct) {  
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)  // outputing that product.
})
/* we can use multiple variables also like below.
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('hello world')
})
*/
app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
  })
  
