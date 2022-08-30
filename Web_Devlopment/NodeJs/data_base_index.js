// using pure mongodb
const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017'; 
const databaseName='e-comm' // name of database in which we store and extract data.
const client= new MongoClient(url);  // creating a client which gona connect with mongodb.
/* Method :1
async function connectDB()
{
    let result = await client.connect();  // connecting mongodb
    db= result.db(databaseName);   // db will store info about name of database in mongodb.
    collection = db.collection('products'); // collection will store info about all collections of database 
    let data = await collection.find({}).toArray(); // collection.find to show all data toArray in array format and await with resolve the returned promise. the data will be returned in form a promise.
   console.log(data) // data outputed.
    


}

connectDB(); */


/*
method 2:
sync function connectDB()  // since it is a async function it gona return a promise 
{
    let result = await client.connect();  // connecting mongodb
    db= result.db(databaseName);   // db will store info about name of database in mongodb.
    return = db.collection('products');
    }
    
    // to resolve promise from above function there are two ways 
  //  way 1 call the function and use then to resolve promise
    connectDB().then((response) => {
    resp.find().toArray().then((data)=>{
    console.log(data)
    })
    })
    
  // way 2 create another function and use await to resolve promise
  const main = async ()=>{
  let data = await connectDB();
  data = await data.find().toArray() // using again await beacauw toarry also returns a promise
  console.log(data);
  }
  
  */
  
  
  
  
  
  /*
  // data insertion in nodejs and mongodb
  const insertData=async ()=>{
   let data = await connectDB();
  let result = await data.insert(
      [
          {name:'max 5',brand:'micromax',price:420,category:'mobile'},
          {name:'max 6',brand:'micromax',price:520,category:'mobile'},
          {name:'max 7',brand:'micromax',price:620,category:'mobile'},

      ]
  )
  if(result.acknowledged)
  {
      console.warn("data is inserted")
  }
}

insertData();
 */
  
