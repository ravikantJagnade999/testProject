var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
        type: String,
      },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    isActive:{
        type: Boolean,
        default:true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userData", userSchema);
