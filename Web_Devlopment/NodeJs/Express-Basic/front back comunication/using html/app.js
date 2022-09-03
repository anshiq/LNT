let express =  require('express');
let database = require('./data')
const path = require('path');
const app =  express();
const port =  80;
app.use(express.static('methods-public')) 

app.use(express.urlencoded({extended: false})) 

app.get('/',(req,res)=>{
    console.log("dfff")
})
app.post('/login',(req,res)=>{
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
      }
    
      res.status(401).send('Please Provide Credentials')
console.log(req.body)
})
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
