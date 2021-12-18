const express = require("express");
const router = express.Router();

const {
  getArtists,
  getArtistsById,
} = require("../contreller/artistController");

router.get("/", getArtists);
router.get("/:id", getArtistsById);

module.exports = router;