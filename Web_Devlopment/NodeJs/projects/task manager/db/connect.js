const mongoose = require('mongoose')
// const { url } = require('../.hiding_db_url/databaseurl')
// console.log(url)

const connectDB = (url) =>{
return mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology:true}) //returning promise. not resolving here.
/*
.then(() => {
    // console.log('connected to the DB Projects.....')
})
.catch((err) => {
    // console.log(err);
    // console.log("error occured unable to connect the DB....");
})
*/
}

module.exports = connectDB;