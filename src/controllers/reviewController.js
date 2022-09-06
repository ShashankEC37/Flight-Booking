const Review = require('../models/review');
const ReviewService = require('../service/reviewService');

const createReview = async (req,res) => {
    try{
        const review = await ReviewService.createReview(req.body);
        res.status(200).json({
            success: true,
            message:"Successfully created Review",
            data: review
            
        }) 

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message:"Something went wrong",
        });
    }}
    
    const getReview = async (req,res) =>{
        try{
            const airline = await ReviewService.getReview(req.params.userId,req.params.flightId);
            res.status(200).json({
                success: true,
                message:"Successfully fetched Review",
                data: airline
                
            }) 
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message:"Something went wrong",
        });
    }}

    const getAllReviews = async (req,res) =>{
        try{
            const airlines = await ReviewService.getAllReviews();
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


    const destroyReview = async (req,res) =>{
        try{
            const review = await ReviewService.destroyReview(req.query.name);
            res.status(200).json({
                success: true,
                message:"Successfully deleted Airline",
                data: review
                
            }) 
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message:"Something went wrong",
        });
    }}



module.exports = {

    createReview,
    getReview,
    getAllReviews,
    destroyReview
}