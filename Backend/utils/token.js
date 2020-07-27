"use strict";
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const createToken = (user) => {
  // Sign the JWT
  return jwt.sign({ id: user._id, username: user.name }, config.secret, {
    algorithm: "HS256",
    expiresIn: "1h",
  });
};
module.exports = createToken;
