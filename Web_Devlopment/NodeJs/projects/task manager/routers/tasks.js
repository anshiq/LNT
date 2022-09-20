const express = require('express');
const routers = express.Router();
// importing function of get post patch and delete
const { getAllTask, getOneTask, createTask, updatetask, deleteTask } = require('../controllers/functions')


routers.route('/').get(getAllTask).post(createTask);
// by using my own brain I can guess to show all Items we do not need any query or id of one element.
routers.route('/:ID').get(getOneTask).delete(deleteTask).patch(updatetask)
// by using my own brain I can guess to delete or update Items we need any query or id of one element.




module.exports = routers;