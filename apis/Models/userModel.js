const { request } = require("express");
const UserSchema = require("../Schemas/userSchema");

module.exports = {
  registerUser: async function (req, res) {
    console.log(req.body.phoneNumber)
    var userData = await UserSchema.findOne({
      phoneNumber: req.body.phoneNumber,
    });
    console.log("userData",userData)
    if (userData) {
      return {
        message: "User Already Exists",
        status: "Failure",
        statusCode: "409",
      };
    } else {
      var user = new UserSchema(req.body);
      await user.save();
      return user;
    }
  },

  getOneUser: async function (req, res) {
    console.log(req.body.userId)
    var userData = await UserSchema.findOne({
      _id: req.body.userId,
    });
    console.log("user",userData)
    return userData;
  },

  updateUser: async function (req, res) {
    var user = await UserSchema.findOneAndUpdate(
      { _id: req.body.userId },
      req.body,
      {
        new: true,
      }
    );
    console.log(user)
    return user;
  },

  disableUser: async function (req, res) {
    var user = await UserSchema.findOneAndUpdate(
        { _id: req.body.userId },
        {isActive: false},
        {
          new: true,
        }
      );
      return user;
  },

  filterUser: async function (req, res) {
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const email = req.body.email;
      const phoneNumber = req.body.phoneNumber;
      console.log(req.body)
    
      const body = {};
    
      if (firstName) {
        body.firstName = { $regex: new RegExp(firstName), $options: 'i' };
      }
    
      if (lastName) {
        body.lastName = { $regex: new RegExp(lastName), $options: 'i' };
      }
    
      if (email) {
        body.email = { $regex: new RegExp(email), $options: 'i' };
      }
    
      if (phoneNumber) {
        body.phoneNumber = { $regex: new RegExp(phoneNumber), $options: 'i' };
      }
      console.log(body)
        const users = await UserSchema.find(body);
        console.log(users)
        return users;
  },
};
