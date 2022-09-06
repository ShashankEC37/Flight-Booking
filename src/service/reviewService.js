
const Review = require("../models/review");
const createReview = async (data) =>{ 
    try {
        const newReview = {
          comment: data.comment,
          user:data.user,
          flight: data.flight

        }
        const response = await new Review(newReview).save();
        return response;

    }   catch (err) {
        console.log(err);
    }

}



const getReview = async (user,flight) =>{
    try{
        const response = await Review.findOne({user: user, flight: flight});
        return response
        } catch(err){
            console.log(err)
        }
}

const getAllReviews = async (flight) =>{
    try{
        const response = await Review.find({flight:flight});
        return response;
        } catch(err){
            console.log(err)
        }
}

const destroyReview = async (id) =>{
    try{
        const response = await Review.findOneAndDelete({id: id});
        return response
        } catch(err){
            console.log(err)
        }
}

module.exports = {
    createReview,
    getAllReviews,
    getReview,
    destroyReview
}