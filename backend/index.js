const express = require('express');
require('./db/config');
const User = require('./db/User');
const app = express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.post("/register",async (req, resp) => {
    let user=new User(req.body);
    let result=await user.save();
    result=result.toObject();
    delete result.password
    resp.send(result);
    // console.log(req.body); 
});
app.post('/login',async (req,resp)=>{
    console.warn(req.body);
    if(req.body.password && req.body.email){
        let user=await User.findOne(req.body).select("-password");
        if(user){
            resp.send(user);
        }
        else{
            resp.send({result:'no user found'})
        }
    }
    else{
        resp.send({result:'no user found'})
    }
})

app.listen(5000);


