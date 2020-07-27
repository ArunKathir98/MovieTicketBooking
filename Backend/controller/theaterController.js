const theater =require('../models/theater');
getTheater={
  handler: async(request,h)=>{
    try{
      const theaterDetails=await theater.find({});
      return h.response({theaterDetails}).code(201);
    }
    catch(error){
      return h.response(error).code(500);
    }
  } 
}
getTheaterByCity={
  handler: async(request,h)=>{
    try{
      const theaterDetailsByCity=await theater.find({cityId:request.params.cityId});
      return h.response({theaterDetailsByCity}).code(201);
    }
    catch(error){
      return h.response(error).code(500);
    }
  } 
}
addTheater={
  handler: async (request, h) => {
    const theaterDetail = new theater({
        cityId:request.params.cityId,
        theaterName:request.payload.theaterName,
        location:request.payload.location    
    });
  try {
      var response = await theaterDetail.save();
      if(response){
      return h.response({message:"Theater added successfully"}).code(201);
    }
  } catch (error) {
      return h.response(error).code(500);
  }
}
}
deleteTheater={
  handler:async(request,h)=>{
    try{
      var result = await theater.findByIdAndDelete(request.params.id);
      return h.response({message:"Theater deleted successfully"}).code(201);
    }catch(error){
      return h.response(error).code(500);

    }
  }
}
module.exports = {
    getTheater,
    getTheaterByCity,
    addTheater,
    deleteTheater
};
