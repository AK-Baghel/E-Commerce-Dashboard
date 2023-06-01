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
    resp.send(req.body);
    // console.log(req.body);
});

app.listen(5000);