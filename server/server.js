require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const artistRoutes = require("./routes/artistRoutes")

connectDB();

const app = express();

app.use(express.json());

app.use('/api/artists', artistRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));