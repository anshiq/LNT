const mongoose = require('mongoose')
/* we can also harcode the with are work only when we full fill their condition then data is stored. but now keeping things simple.
const TaskSchema = new  mongoose.Schema({  // building model.
    name:String,completed:Boolean
}) */
// copy paste the hardcode schema
const TaskSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'must provide name'],
      trim: true,
      maxlength: [20, 'name can not be more than 20 characters'],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  })

// tasks will the collection in the database having above schema 
module.exports = mongoose.model('tasks',TaskSchema) // will be used in contoler functions