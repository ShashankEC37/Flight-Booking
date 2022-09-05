
const Flight = require("../models/flight");
const createFlight = async (data) =>{ 
    try {
        const newFlight = {
            departureAirport: data.departureAirport,
            arrivalAirport: data.arrivalAirport,
            duration: data.duration,    
            flightDate: data.flightDate,
            departureTme: data.arrivalTime,
            flightNumber: data.flightNumber,
            price: data.price,
            airline: data.airlineId

        }
        const response = await new Flight(newFlight).save();
        return response;

    }   catch (err) {
        console.log(err);
    }

}

const updateFlight = async (data) =>{
    try{
        const response = await Flight.updateOne({flightNumber: data.flightNumber}, data);
        } catch(err){
            console.log(err)
        }
}

const destroyFlight = async (flightNumber) =>{
    try{
const response = await Flight.findOneAndDelete({flightNumber: flightNumber});
} catch(err){
    console.log(err)
}
}

const getFlight = async (flightNumber) =>{
    try{
        const response = await Flight.findOne({flightNumber: flightNumber});
        return response;
        } catch(err){
            console.log(err)
        }
}

const getAllFlights = async () =>{
    try{
        const response = await Flight.find({flightNumber: flightNumber});
        return response    
    } catch(err){
            console.log(err)
        }
}

module.exports = {
    createFlight,
    updateFlight,
    destroyFlight,
    getAllFlights,
    getFlight
}