const taskModel = require('../models/schema')
// we can learn more about methods like getone post etc on mongoose docs in queries crud function.
const getAllTask = async (req, res) => {
    //  res.send('get req successful and showed all the items'); 
    try {
        const tasks = await taskModel.find({})
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}  // function of get request to show all the items




const getOneTask = async (req, res) => {
    // res.send('get req successful and showed one items'); 
    try {
        const { ID: taskID } = req.params // make sure you give { ID: taskID } as you set in routers and app.js
        const task = await taskModel.findOne({ _id: taskID })  // this _id convention mongodb uses
        // console.log(req.params) output = { ID: 0987623456788765 } 
        if (!task) {
            return res.status(404).send("if: no task found")
        }
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
        res.status(200).json(task)
    } catch (error) {
        res.status(500).send("no error task found")
    }


}  // function of get request to show all the items





const createTask = async (req, res) => {
    try {   // try this if not successful then run catch
        const task = await taskModel.create(req.body)
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}  // function of post request to create an item.





const deleteTask = async (req, res) => {
    // res.send('delete req successful and deleted an item');
    try {
        const { ID: taskID } = req.params
        const task = await taskModel.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).send("if: no task found and unable to delete")
        }
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
        res.status(200).json(task)

    } catch (error) {
        res.status(500).send("no error task found")
    }


}  // function of delete request to delete item.




const updatetask = async (req, res) => {
    // res.send('patch req successful and update an item'); 
    try {
        const { ID: taskID } = req.params
        const task = await taskModel.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true, // new true means task will store new updated value 
            runValidators: true  // schema validators apply for this function.
        })
        if (!task) {
            return res.status(404).json({ msg: `NO task with id: ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(404).json({ msg: error })
    }

}  // function of patch request to update an item.






module.exports = {
    getAllTask,
    getOneTask,
    createTask,
    updatetask,
    deleteTask
}
