
const FlightModule = require("../models/flight");
const createFlight = async (data) =>{ 
    try {
        const newFlight = {
          name: data.name

        }
        const response = await new FlightModule(newFlight).save();
        return response;

    }   catch (err) {
        console.log(err);
    }

}



const getFlight = async (flightNumber) =>{
    try{
        const response = await FlightModule.findOne({flightNumber: flightNumber});
        return response
        } catch(err){
            console.log(err)
        }
}

const getAllFlights = async (data) =>{
    try{
            let response;
            if(data.sort)
             {
                if(data.price){
                if(data.sort =='inc')
                    response = await FlightModule.find().sort('price');
                else
                    response = await FlightModule.find().sort('-price');
             }
              else if( data.duration){
                  if(data.sort =='inc')
                   response = await FlightModule.find().sort('duration');
                  else 
                   response = await FlightModule.find().sort('-duration');
                
              } else
                 response = await FlightModule.find();
            }
            else if(data.filter) {
                if(data.price){
                    if(data.filter =='lt')
                        response = await FlightModule.find({price: {$lt: data.price}});
                    else
                        response = await FlightModule.find({price: {$gt: data.price}});
                 }
                  else if( data.duration){
                      if(data.filter =='lt')
                       response = await FlightModule.find({duration: {$lt: data.duration}});
                      else 
                       response = await FlightModule.find({duration: {$gt: data.duration}});
                    
                  } else
                     response = await FlightModule.find();

            }
             
        
        
        return response;

        } catch(err){
            console.log(err)
        }
}

const destroyFlight = async (flightNumber) =>{
    try{
        const response = await FlightModule.findOneAndDelete({flightNumber: flightNumber});
        return response
        } catch(err){
            console.log(err)
        }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    destroyFlight
}