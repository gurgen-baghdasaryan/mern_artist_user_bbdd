require("dotenv").config();

const artistData = require("./data/artists");
const connectDB = require("./config/db");
const Artist = require("./models/Artist");

connectDB();

const importData = async () => {
  try {
    await Artist.deleteMany({});

    await Artist.insertMany(artistData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();