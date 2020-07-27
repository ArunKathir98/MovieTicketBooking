const showTime=require('../models/showTime');
addShowTime={
    handler: async (request, h) => {
      const showTimeDetail = new showTime({
          city:request.payload.city,
          theaterName:request.payload.theaterName,
          movieName:request.payload.movieName,
          showTime:request.payload.showTime,
          availability:request.payload.availability,
          price:request.payload.price   
      });
    try {
        var response = await showTimeDetail.save();
        if(response){
        return h.response({message:"show time added successfully"}).code(201);
      }
    } catch (error) {
        return h.response(error).code(500);
    }
  }
  },
  getshowTime={
    handler: async(request,h)=>{
        console.log(request.params);
      try{
        const showTimeDetails=await showTime.find({theaterName:request.params.theater,city:request.params.city,movieName:request.params.movie});
        return h.response({showTimeDetails}).code(201);
      }
      catch(error){
        return h.response(error).code(500);
      }
    } 
  }
  module.exports = {
    addShowTime,
    getshowTime
};