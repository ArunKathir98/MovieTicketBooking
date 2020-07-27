const UserController = require("../controller/userController");

module.exports = [
  {
    path: "/api/signup",
    method: "POST",
    config: {
      handler: UserController.signup.handler,
      auth: false,
    },
  },
  {
    path: "/api/signin",
    method: "POST",
    config: {
      handler: UserController.signin.handler,
      auth: false,
    },
  },
];
