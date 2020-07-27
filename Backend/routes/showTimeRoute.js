const showTimeController = require("../controller/showTimeController");

module.exports = [
  {
    path: "/api/showtime",
    method: "POST",
    config: {
      handler: showTimeController.addShowTime.handler,
      auth:false
    }
  },
  {
    path: "/api/showtime/{city}/{theater}/{movie}",
    method: "GET",
    config: {
      handler: showTimeController.getshowTime.handler,
      auth:false
    },
  }
];