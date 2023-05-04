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
};
