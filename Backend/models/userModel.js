const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: "Password can't be empty",
    minlength: [4, "Password must be atleast 4 character long"],
  },
  saltSecret: { type: String },
  phoneNumber: { type: String }
 });

// Custom validation for email
userSchema.path("email").validate((val) => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, "Invalid e-mail.");

module.exports = mongoose.model("User", userSchema);
