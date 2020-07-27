const movie =require('../models/movies');
getMovie={
  handler: async(request,h)=>{
    try{
      const movieDetails=await movie.find({});
      return h.response({movieDetails}).code(201);
    }
    catch(error){
      return h.response(error).code(500);
    }
  } 
}
getMovieCity={
    handler: async(request,h)=>{
        try{
          const movieDetails=await movie.find({cityId:request.params.cityId});
          return h.response({movieDetails}).code(201);
        }
        catch(error){
          return h.response(error).code(500);
        }
      } 
}
getMovieTheater={
    handler: async(request,h)=>{
        try{
          const movieDetails=await movie.find({theaterId:request.params.theaterId});
          return h.response({movieDetails}).code(201);
        }
        catch(error){
          return h.response(error).code(500);
        }
      } 
}
addMovie={
  handler: async (request, h) => {
    const movieDetail = new movie({
        cityId:request.params.cityId,
        theaterId:request.params.theaterId,
        movieName:request.payload.movieName,
        director:request.payload.director,
        certificate:request.payload.certificate,
        language:request.payload.language   
    });
  try {
      var response = await movieDetail.save();
      if(response){
      return h.response({message:"Movie added successfully"}).code(201);
    }
  } catch (error) {
      return h.response(error).code(500);
  }
}
}
deleteMovie={
  handler:async(request,h)=>{
    try{
      var result = await movie.findByIdAndDelete(request.params.id);
      return h.response({message:"Movie deleted successfully"}).code(201);
    }catch(error){
      return h.response(error).code(500);

    }
  }
}
getMovieTheaterCity={
  handler: async(request,h)=>{
    try{
      const movieDetails=await movie.find({theaterId:request.params.theaterId,cityId:request.params.cityId});
      return h.response({movieDetails}).code(201);
    }
    catch(error){
      return h.response(error).code(500);
    }
  } 
}
updateMovie={
    handler:async(request,h)=>{
      try{
        const movieUpdate = {
            cityId:request.params.cityId,
            theaterId:request.params.theaterId,
            movieName:request.payload.movieName,
            director:request.payload.director,
            certificate:request.payload.certificate,
            language:request.payload.language   
        }
        var result = await movie.findByIdAndUpdate(request.params.id,movieUpdate);
        return h.response({message:"Movie updated successfully"}).code(201);
      }catch(error){
        return h.response(error).code(500);
  
      }
    }
  }
module.exports = {
    getMovie,
    addMovie,
    deleteMovie,
    updateMovie,
    getMovieCity,
    getMovieTheater,
    getMovieTheaterCity
};
