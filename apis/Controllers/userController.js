const express = require('express');
const router = express.Router();
var userModel = require("../Models/userModel");

module.exports = router.post(
    "/user/registerUser",
    async function (req, res) {
      try {
        console.log(req.body)
        var user = await userModel.registerUser(req, res);
        console.log(user)
        if(user.statusCode==="409"){
            res.status(409).json(user); 
        }else{
            res.status(200).json(user); 
        }
      } catch (error) {
        res.status(500).json(error);
      }
    }
  );

  module.exports = router.get(
    "/user/getOneUser",
    async function (req, res) {
      try {
        var user = await userModel.getOneUser(req, res);
        if(!user){
            res.status(400).json(user); 
        }else{
            res.status(200).json(user); 
        }
      } catch (error) {
        res.status(500).json(error);
      }
    }
  );