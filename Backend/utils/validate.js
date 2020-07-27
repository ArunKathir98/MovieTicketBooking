const mongoose = require("mongoose");
require("../models/userModel");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");

const validate = (decoded, request, reply) => {
  return User.findOne({ email: request.payload.email }, (err, user) => {
    if (user && user._id) {
      return { isValid: true };
    } else {
      return { isValid: false };
    }
  });
};

const passwordValidation = async (request, user) => {
  return await bcrypt
    .compare(request.payload.password, user.password)
    .then((result) => {
      return result;
    });
};

module.exports = { validate, passwordValidation };
