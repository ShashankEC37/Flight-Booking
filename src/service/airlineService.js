 
const Airline = require("../models/airline");
const createAirline = async (data) =>{ 
    try {
       
        const newAirline = {
          name: data.name

        }
        const response = await new Airline(newAirline).save();
        return response;

    }   catch (err) {
        console.log(err);
    }

}



const getAirline = async (name) =>{
    try{
        console.log(name)
        const response = await Airline.findOne({name:name});
        console.log(response)
        return response;
        
        } catch(err){
            console.log(err)
        }
}

const getAllAirline = async () =>{
    try{
        const response = await Airline.find();
        return response;
       
        } catch(err){
            res.status(500).json(err)
                   console.log(err)
        }
}

const destroyAirline = async (name) =>{
    try{
        const response = await Airline.findOneAndDelete({name: name});
        return response
        } catch(err){
            console.log(err)
        }
}
const updateAirline = async (data) =>{
    try{
const response = await Airline.findOneAndUpdate({name:data.original},
    {name:data.updatename, website:data.updatewebsite}
    ,{new:true}, (err, info)=>{console.log(info) })
    return response;
    } catch(err){
        console.log(err)
    }
}
module.exports = {
    createAirline,
    getAllAirline,
    getAirline,
    destroyAirline,
    updateAirline
}