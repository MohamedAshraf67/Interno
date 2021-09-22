const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    username:{type:String,unique=true},
    password:{type:String},
    email:{type:String,unique=ture}
},{timestamps:true});

const Signup=mongoose.model('Login',UserSchema);
module.exports=Signup;