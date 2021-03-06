const mongoose=require('mongoose');
const Schema=mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;

const UserSchema=new Schema({
    username:{type:String,unique=true},
    password:{type:String},
    email:{type:String,unique=ture}
},{timestamps:true});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

UserSchema.methods.setPassword = function(password){
     this.salt = crypto.randomBytes(16).toString('hex');
     this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    };
UserSchema.methods.validPassword = function(password) {
         var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
         return this.hash === hash;
    };
    UserSchema.methods.generateJWT = function() {
        var today = new Date();
        var exp = new Date(today);
        exp.setDate(today.getDate() + 60);
        eturn jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
        }, secret);
    };

    UserSchema.methods.toAuthJSON = function(){
          return {
            username: this.username,
            email: this.email,
            token: this.generateJWT(),
            bio: this.bio,
            image: this.image
          };
    };
       
const Signup=mongoose.model('Login',UserSchema);
module.exports=Signup;