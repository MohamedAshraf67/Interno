const express = require("express")
const app = express()
const port = 3000
const cors = require("cors");
const login = require("../models/login");
const Signup = require("../models/signup");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get("/", cors(), async (req, res) => {
    res.send("This is working")
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

app.post('/login',function(req,res){
    var username=req.body.username;
    var password=req.body.password;

    user.findOne({username:username,password:password},function(err,user){
        if (err){
            console.log(err);
        }
    })
})

app.post('/signup',function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    var email=req.body.email;

    var user=new Signup();
    user.username=username;
    user.password=password;
    user.email=email;

})