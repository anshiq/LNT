const express = require('express');
const app = express();
const tasks = require('./routers/tasks')
const connectDB = require('./db/connect') 
// const { url } = require('./.hiding_db_url/databaseurl') below method is better to parse url string.
require('dotenv').config();  // dotenv will automatically pick up .env file from files.

// middleware
app.use(express.static('./public'));
app.use(express.json())

// router path = app.js-> routers/task.js -> controller/functions.js
app.use('/api/v1/tasks',tasks) // setting base path of the router to start work

const start = async () => {
 try {
    await connectDB(process.env.db_url)  // using process dotenv to send url string
    app.listen(80,console.log('server up n running on 80 and connected to db....'))
 } catch(error){ 
    console.log(error)
    console.log('server did not started because of error in db connection...')
 }
}
start();
