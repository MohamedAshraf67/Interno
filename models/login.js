const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    username:{type:String,unique=true},
    password:{type:String},
},{timestamps:true});

const Login=mongoose.model('Login',UserSchema);
module.exports=Login;