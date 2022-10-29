const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
    email:{
        type:String,
        required: true,
        
    },
    password:{
        type:String,
        required:true
    }
},{timeStamps:true})

userSchema.pre('save', async function EncryprPassword(next){
    const user = this;
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;
})

userSchema.methods.isValidPassword = async function checkValidity(password){
    const user = this;
    const compare = await bcrypt.compare(password,user.password);
    return compare
}

const User = mongoose.model('Uer', userSchema);
module.exports = User