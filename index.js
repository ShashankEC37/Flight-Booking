const express = require('express');
const apiRouter = require("./src/routes/index");
const  User = require('./src/models/user')
const { connect } = require('./src/config/database');
const app = express();



app.use("/api", apiRouter);


app.get('/' ,(req,res) => {
    res.status(200);
    res.send({
        success: true
    });
   
});

app.listen(3000, async () => {
    console.log("Server is Running in port 3000");
    await connect();
    console.log("MongoDB is successfully started");
    console.log("Server Started Successfully");
    let user = await User.create({
        email:"abccc@xyc.com",
        password: 12345,
        username: "AAABC"
    });
    console.log(user);
});