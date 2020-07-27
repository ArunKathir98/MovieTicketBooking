const Hapi = require("@hapi/hapi");
var Db = require("./db");
const config = require("./config/config");
const cityRoutes=require("./routes/cityRoute");
const theaterRoutes=require('./routes/theaterRoute');
const movieRoutes=require('./routes/movieRoute');
const userRoutes=require('./routes/userRoute');
const showTimeRoutes=require('./routes/showTimeRoute');
const validate = require('./utils/validate');

const init = async () => {
    const server = new Hapi.server({
      port: config.server.port,
      host: config.server.host,
      routes:{
        cors:{
            origin:[config.frontEnd]
        }
    }
    });
    
  server.route(movieRoutes);
  server.route(cityRoutes);
  server.route(theaterRoutes);
  server.route(userRoutes);
  server.route(showTimeRoutes);
  
  await server.register(require('hapi-auth-jwt2'));
  server.auth.strategy('jwt', 'jwt',
  { key: config.secret,
    validate  
  });
 
  server.auth.default('jwt');



    await server.start();
    console.log("Server running on %s", server.info.uri);
};
init();
