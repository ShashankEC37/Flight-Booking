const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({

    id:{
        type: Number
    },
    flight:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Flight'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    status:{//"booked","cancelled","inprocess"
        type:String,
        required: true,
        default: "In process",
        enum:["booked","cancelled","inprocess"]
    }
},{timestamps: true});

const Booking = new mongoose.model('Booking', bookingSchema );

module.exports = Booking;