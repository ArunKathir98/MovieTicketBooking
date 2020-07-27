const showTimeController = require("../controller/showTimeController");

module.exports = [
  {
    path: "/api/showtime/{cityId}/{theaterID}/{movieId}",
    method: "POST",
    config: {
      handler: showTimeController.addShowTime.handler,
      auth:false
    }
  },
  {
    path: "/api/showtime/{cityId}/{theaterID}/{movieId}",
    method: "GET",
    config: {
      handler: showTimeController.getshowTime.handler,
      auth:false
    },
  }
];