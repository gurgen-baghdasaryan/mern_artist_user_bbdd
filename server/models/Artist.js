const mongoose = require("mongoose");

const artistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

const Artist = mongoose.model("artist", artistSchema);

module.exports = Artist;