
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

const getAllFlights = async () =>{
    try{
        const response = await FlightModule.find();
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