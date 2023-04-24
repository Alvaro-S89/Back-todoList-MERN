const todoRouter = require("express").Router()

const {saveTodo, getTodosOfUser, deleteTodo} = require("../controllers/todo.controllers")

todoRouter
.post("/create/:userID", saveTodo)
.get("/:userID", getTodosOfUser)
.delete("/:id", deleteTodo)

module.exports = todoRouter