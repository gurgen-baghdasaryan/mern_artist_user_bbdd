require("dotenv").config();

const UserModel = require("./Models/Users")

const connectionDB = require("./config/db");

connectionDB();

const importData = async () => {
    try {
        await UserModel.deleteMany({});

        await UserModel.insertMany(productData);

        console.log("Data Import Success");

        process.exit();
    } catch (error) {
        console.error("Error with data import", error);
        process.exit(1);
    }
};

importData();