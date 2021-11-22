const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://gugo:1234@cluster0.lthpa.mongodb.net/test?authSource=admin&replicaSet=atlas-ieyktw-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true")




app.listen(3001, ()=>{
    console.log("Server Runs Perfectly!");
})