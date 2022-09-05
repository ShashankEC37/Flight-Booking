
const Airline = require("../models/airline");
const createAirline = async (data) =>{ 
    try {
        const newAirline = {
          name:data.name

        }
        const response = await new Flight(newAirline).save();
        return response;

    }   catch (err) {
        console.log(err);
    }

}



const getAirline = async (name) =>{
    try{
        const response = await Flight.findOne({name: name});
        return response
        } catch(err){
            console.log(err)
        }
}

const getAllAirline = async (name) =>{
    try{
        const response = await Airline.find({name: name});
        return response;
        } catch(err){
            console.log(err)
        }
}

module.exports = {
    createAirline,
    getAllAirline,
    getAirline
}