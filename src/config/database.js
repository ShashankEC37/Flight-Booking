const mongoose = require("mongoose");
const connect = () =>{
    console.log("MongoDb connection requested");
    mongoose.connect('mongodb://localhost/project');
}

module.exports = {
    connect
}