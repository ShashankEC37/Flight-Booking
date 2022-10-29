const mongoose = require('mongoose');

const airlineSchema = new mongoose.Schema({
     name:{
        type: String,
        require:  true,
        unique: true
     },
     website:{
        type:String
     }
},{timeStamps: true});

const Airline = new mongoose.model('Airline', airlineSchema);


module.exports = Airline;