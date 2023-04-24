const { Schema, model } = require("mongoose")

const TodoSchema = new Schema({
    topic: {
        type: String,
        required: [true, "Topic is required"]
    },
    details: {
        type: String,
        required: [true, "Details are required"]
    }
})

const TodoModel = model("Todo", TodoSchema)

module.exports = TodoModel