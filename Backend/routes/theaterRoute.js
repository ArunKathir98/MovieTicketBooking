const theaterController = require("../controller/theaterController");

module.exports = [
  {
    path: "/api/theater",
    method: "GET",
    config: {
      handler: theaterController.getTheater.handler,
      auth:false
    }
  },
  {
    path: "/api/theater/{cityId}",
    method: "GET",
    config: {
      handler: theaterController.getTheaterByCity.handler,
      auth:false
    }
  },
  {
    path: "/api/theater/{cityId}",
    method: "POST",
    config: {
      handler: theaterController.addTheater.handler,
      auth:false
        }
  },
  {
    path: "/api/theater/{id}",
    method: "DELETE",
    config: {
      handler: theaterController.deleteTheater.handler,
      auth:false
        }
  }
];