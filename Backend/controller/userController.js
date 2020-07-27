const mongoose = require("mongoose");
require("../models/userModel");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const Boom = require("boom");

const createToken = require("../utils/token");
const userRoute = require("../routes/userRoute");
const { passwordValidation } = require("../utils/validate");
const { passwordEncryption } = require("../utils/encryption");

signup = {
  handler: async (request, reply) => {
    try {
      var userData = await passwordEncryption(request.payload).then(
        (result) => {
          return result;
        }
      );
      request.log('read',userData);
      var user = new User(userData);
      var response = await user.save({ user });
      console.log("response", response);
      if (response) {
        return reply.response({
          message: "User Created Successfully",
          
        }).code(201);
      }
    } catch (error) {
      res= error
      request.log('error',error);
      if (11000 === error.code || 11001 === error.code) {
        console.log("duplicate error1", res);
        return reply.response({message:"Email Already Exist",statuscode:409}).code(409);
        // { message: "Email Already Exist",
        //          code: error.code };
      } else {
        res = Error
        console.log("error", res);
        return reply.response({message:"bad request",statuscode:400}).code(400);
      }
    }
  },
};



signin = {
  handler: async (request, reply) => {
    try {
      var response = await User.findOne({ email: request.payload.email });
      console.log("response", response);
      if (response) {
        return await passwordValidation(request, response).then((result) => {
          console.log("then", result);
          if (result) {
            var token = createToken(response);
            return reply.response({
              token: token,
              message: "Login Successful",
            }).code(200);
          } else {
            return reply.response({
              message: "Incorrect Username or Password",
              statuscode:401
            }).code(401);
          }
        });
      }
    } catch (error) {
      return Boom.forbidden(error);
    }
  },
};



module.exports = {
  signup,
  signin,
};
