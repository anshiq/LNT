const express = require('express')
const app = express()
const { products } = require('../data')

app.get('/api/v1',(req,res)=>{ 
/* 
    we can insertthe ? and the parameters in url this will not cause any error.
     http://localhost:5000/api/v1?name=1&age=11   console.log(req.query) === { name: '1', age: '11' }
     http://localhost:5000/api/v1?1  console.log(req.query) === { '1': '' }
*/
console.log(req.query)  
res.send('fsafhdjf')  // on any insertion after ? it show output on page == fsafhdjf
})
app.listen(5000,()=>{
    
    console.log('server is run on 5000')
})