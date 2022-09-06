
const BookingService = require('../service/bookingService');

const createBooking = async (req,res) => {
    try{
        const booking = await BookingService.createBooking(req.body);
       
        res.status(200).json({
            success: true,
            message:"Successfully booked flight",
            data: booking
            
        }) 

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message:"Something went wrong",
        });
    }}
    
    const boardingPass = async (req,res) =>{
        try{
            const boardingPass = await BookingService.boardingPass(req.params.id);
            res.status(200).json({
                success: true,
                message:"Successfully fetched BoardingPass",
                data: boardingPass
                
            }) 
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message:"Something went wrong",
        });
    }}

    


    const cancleBooking = async (req,res) =>{
        try{
            const cancel = await BookingService.cancleBooking(req.params.id);
            res.status(200).json({
                success: true,
                message:"Successfully cancled Booking",
                data: cancel
                
            }) 
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message:"Something went wrong",
        });
    }}



module.exports = {

    createBooking,
    boardingPass,
    cancleBooking
}