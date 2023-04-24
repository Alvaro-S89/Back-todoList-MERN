const TodoModel = require("../models/todo.model")
const UserModel = require("../models/user.model")


const saveTodo = async (req, res) => {
    const { topic, details } = req.body
    const { userID } = req.params
    console.log({userID})
    try {
        
        const createdTodo = await TodoModel.create({
            topic,
            details
        })

        const user = await UserModel.findById(userID)

        user.todos.push(createdTodo._id)

        await user.save()
        
        res.status(201).send({data: createdTodo})

    } catch (error) {
        res.status(500).send({msg: error.message})
    }
}


const getTodosOfUser = async (req, res) => {
    const { userID } = req.params
    
    try {
        const user = await UserModel.findById(userID).populate("todos")

        res.status(200).send({data:user.todos})
    } catch (error) {
        res.status(500).send({msg: error.message})
    }
}

const deleteTodo = async(req, res) => {
    const { id } = req.params
    const  { userID } = req.body
    try {
        await TodoModel.findByIdAndDelete(id)
        const user = await UserModel.findById(userID)
        user.todos.pull(id)
        await user.save()

        res.status(200).send({msg: "deleted task"})
    } catch (error) {
        res.status(500).send({msg: error.message})
    }
}


module.exports = {
    saveTodo, 
    getTodosOfUser,
    deleteTodo
}
