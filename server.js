require("dotenv").config();
const express = require("express");
const app = express();
const mongoose= require("mongoose")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port=process.env.PORT;
const url=process.env.URL
const UserController = require("./apis/Controllers/userController");

app.use("/api", UserController);

// ------------- Mongo Connection--------------

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
  
  mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  }).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));
  });