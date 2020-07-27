const cityController = require("../controller/cityController");

module.exports = [
  {
    path: "/api/city",
    method: "GET",
    config: {
      handler: cityController.getCity.handler,
      auth:false
    },
  },
  {
    path: "/api/city",
    method: "POST",
    config: {
      handler: cityController.addCity.handler,
      auth:false
        },
  },
  {
    path: "/api/city/{id}",
    method: "DELETE",
    config: {
      handler: cityController.deleteCity.handler,
      auth:false
        },
  }
];