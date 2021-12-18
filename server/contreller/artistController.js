const Artist = require("../models/Artist");

const getArtists = async (req, res) => {
    try {
        const artists = await Artist.find({});
        res.json(artists);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const getArtistsById = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.id);

        res.json(artist);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = {
    getArtists,
    getArtistsById,
};