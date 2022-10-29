const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const apiRouter = require("./src/routes/index");
const autnRoutes = require("./src/routes/authRoutes");

const {connect} = require("./src/config/database");
require("./src/utils/auth");
require('dotenv').config()

app.use(bodyParser.urlencoded({extended:false}));
app.use("/", autnRoutes);
app.use("/api",apiRouter);

app.listen(3000, async ()=>{
    console.log("Server running");
   await  connect();
   console.log("MongoDB Started");
});