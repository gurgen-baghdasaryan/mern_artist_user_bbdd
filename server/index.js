require("dotenv").config(); 
const express = require('express');
const connectionDB = require('./Config/db');
const UserModel = require("./Models/Users");
 


connectionDB();

const app = express()


app.use(express.json());




app.get("/getUsers",  (req, res)=>{
    UserModel.find({}, (err, result )=>{
        if (err) {
            res.json(err)
        }else{
            res.json(result)
        }
    });
});

app.post("/createUsers", async(req, res)=>{
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save()

    res.json(user)
})

PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server runs PERFECTLY!!! ${PORT}`);
})