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
    usernam: {
        type: String,
        required: true,
    },

});

const UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel