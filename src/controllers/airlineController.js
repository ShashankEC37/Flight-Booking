const Airline = require("../models/airline");
const AirlineServices = require("../service/airlineService");

const createAirline = async (req,res)=>{
    try{
        const body = req.body.name
        console.log(body)
        const exists = await Airline.findOne({name:body});
        console.log(exists)
        if(exists){
            res.status(403).json({
                success:false,
                message:"Airline already exists"
            })
        }else
        {
            const airline = await AirlineServices.createAirline(req.body);
            res.status(200).json({
                success:true,
                message: "Airline Successfully Created",
                data: {airline}
            })
        }
    }catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            message: "Something went wrong could not create airline",

        })
    }
}
    const getAirline = async (req,res) =>{
        try{
            const airline = await AirlineServices.getAirline(req.params.name);
            res.status(200).json({
                success: true,
                message:"Successfully fetched Airline",
                data: airline
                
            }) 
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message:"Something went wrong",
        });
    }}
     const getAllAirlines = async (req,res) =>{
        try{
            const airlines = await AirlineServices.getAllAirline();
            res.status(200).json({
                success: true,
                message:"Successfully fetched all Airline",
                data: airlines
                
            }) 
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message:"Something went wrong",
        });
    }}


    const destroyAirline = async (req,res) =>{
        try{
            const airline = await AirlineServices.destroyAirline(req.params.name);
            res.status(200).json({
                success: true,
                message:"Successfully deleted Airline",
                data: airline
                
            }) 
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message:"Something went wrong",
        });
    }}


    const updateAirline = async (req,res) =>{
        try{
            
            const airline = await AirlineServices.updateAirline(req.body);
                res.status(200).json({
                    success: true,
                    message:"Successfully updated Airline",
                    data: {update:req.body}
                    
                }) 
        } catch (err) {
            console.log(err);
            res.status(500).json({
                success: false,
                message:"Something went wrong",
            });
        }}




module.exports = {

    createAirline,
    getAirline,
    getAllAirlines,
    destroyAirline,
    updateAirline
}