const mongoose = require("mongoose");
const connect=()=>{
    console.log("Mongodb Requesteds");
    mongoose.connect("mongodb://localhost/project");
}

module.exports={
    connect
}