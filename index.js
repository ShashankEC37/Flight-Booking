const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const apiRouter = require("./src/routes/index");
const authRouter = require('./src/routes/authRoutes')
const  User = require('./src/models/user');
const { connect } = require('./src/config/database');
require('./src/utils/auth')
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use("/",authRouter)
app.use("/api", passport.authenticate('jwt',{session:false}),apiRouter);


// app.use(function(err,req,res,next){
//     res.status(err.status || 500);
//     res.json({
//         success:false,
//         error:err})
// })

app.listen(3000, async () => {
    console.log("Server is Running in port 3000");
    await connect();
    console.log("MongoDB is successfully started");
    console.log("Server Started Successfully");
   
});