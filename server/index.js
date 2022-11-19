// imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const TestModel = require("./models/Test")

// allows us to pass data from backend to frontend in json format
app.use(express.json())

mongoose.connect(
  "mongodb+srv://admin:8dlmgtkGBTNfIKLc@484project.hhmvxhh.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);


app.post("/insert", (req,res) => {
    const test = new TestModel({name: "jack", password: "asd", email: "test@email.com"});

    try {
        test.save();
        res.send("data was inserted");
    } catch (err) {
        console.log(err)
    }
})

app.listen(3001, () => {
    console.log("server is running on port 3001")
})