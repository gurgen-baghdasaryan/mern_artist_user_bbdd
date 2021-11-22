const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    projectitle: {
        type: String,
        required: true,
    },

})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel