const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email:{
        type: String,
        required: [true, "Please provide an email"],
    },
    picture:{
        type: String,
        required: [true, "Please provide a photo"],
    },
    todos:[
        {
            type: Schema.Types.ObjectId,
            ref: "Todo"
        }
    ]
})

const UserModel = model("User", UserSchema)

module.exports = UserModel