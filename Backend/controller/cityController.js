const city =require('../models/city');
const cityRoute=require('../routes/cityRoute');
const mongoose = require('mongoose');


getCity={
  handler: async(request,h)=>{
    try{
      const cityDetails=await city.find({});
      return h.response({cityDetails}).code(201);
    }
    catch(error){
      return h.response(error).code(500);
    }
  } 
}
addCity={
  handler: async (request, h) => {
    const cityDetail =  new city({
      city:request.payload.city
    });
  try {
      var response = await cityDetail.save();
      if(response){
      return h.response({message:"city added successfully"}).code(201);
    }
  }catch (error) {
    res= error
    if (11000 === error.code || 11001 === error.code) {
      return h.response({message:"city Already Exist",statuscode:409}).code(409);
    } else {
      res = Error
      return h.response({message:"bad request",statuscode:400}).code(400);
    }
  }
}
}
deleteCity={
  handler:async(request,h)=>{
    try{
      var result = await city.findByIdAndDelete(request.params.id);
      return h.response({message:"city deleted successfully"}).code(201);
    }catch(error){
      return h.response(error).code(500);

    }
  }
}
module.exports = {
  getCity,
  addCity,
  deleteCity
};
