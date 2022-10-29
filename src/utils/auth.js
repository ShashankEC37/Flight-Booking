const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require("../models/user");
const jWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;


    passport.use('signup',  new localStrategy({
        usernameField:'email',
        passwordField:'password'
        },
    async (email,password,done) => {
        try {
            const exists = await User.findOne({email});
            if(exists){
                const err = new Error('User Already exist');
                return done("User Already exist",false,err)
            }else{
                const user =await User.create({email,password});
                return done(null, user)}
             } catch(err){
            console.log(err);
            done(err);
        }

    }
    ));

    passport.use('login', new localStrategy({
        usernameField:'email',
        passwordField:'password'
    },
    async (email,password,done) => {
        try{
            const user = await User.findOne({email:email});
            if(!user){
                return done("User not found",false,{message:"User not found"});

            }
            const validate = await user.isValidPassword(password);
            if(!validate){
                
                return done("Wrong password",false, {message:'Wrong  password'})
            }
            return done(null, user, {message:'Logged in Successfully'});
        } catch(err){
            console.log(err);
            done(err);
        }
    }
    ));

    passport.use(new jWTStrategy(
        {
            secretOrKey:'TOP_SECRET',
            jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
        },
        async (token,done) =>{
            try{
                return done(null, token.user);

            } catch(err){
                console.log(err);
                done(err);
            }
        }

    ));