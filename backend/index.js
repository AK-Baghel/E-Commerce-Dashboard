const express = require('express');
const app = express();
app.use(express.json());

require('./db/config');
const User = require('./db/User');
const Product=require('./db/Product');

const cors=require('cors');
app.use(cors());


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

app.post("/add-product",async(req,resp)=>{
    let product=new Product(req.body);
    let result=await product.save();
    resp.send(result);
});

app.get("/products",async(req,resp)=>{
    let products=await Product.find();
    if(products.length>0){
        resp.send(products)
    }
    else{
        resp.send({result:"NO PRODUCTS FOUND!!!"})
    }
})

app.delete("/product/:id",async(req,resp)=>{
    const result=await Product.deleteOne({_id:req.params.id});
    resp.send(result);
})

app.listen(5000);


