const movieController = require("../controller/movieController");

module.exports = [
  {
    path: "/api/movie",
    method: "GET",
    config: {
      handler: movieController.getMovie.handler,
      auth:false
    },
  },
  {
    path: "/api/movie/{cityId}/{theaterId}",
    method: "POST",
    config: {
      handler: movieController.addMovie.handler,
      auth:false
        },
  },
  {
    path: "/api/movie/{id}",
    method: "DELETE",
    config: {
      handler: movieController.deleteMovie.handler,
      auth:false
        },
  },
  {
    path: "/api/movie/{cityId}/{theaterId}",
    method: "PUT",
    config: {
      handler: movieController.updateMovie.handler,
      auth:false
        },
  },
  {
    path: "/api/movie/{cityId}",
    method: "GET",
    config: {
      handler: movieController.getMovieCity.handler,
      auth:false
        },
  },
  {
    path: "/api/movie/theater/{theaterId}",
    method: "GET",
    config: {
      handler: movieController.getMovieTheater.handler,
      auth:false
        },
  },
  {
    path: "/api/movie/theater/{theaterId}/{cityId}",
    method: "GET",
    config: {
      handler: movieController.getMovieTheaterCity.handler,
      auth:false
        },
  }
];