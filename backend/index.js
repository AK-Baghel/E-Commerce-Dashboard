const express=require('express');
const app=express();

app.get('/',(req,resp)=>{
    resp.send('<h1>HEllo world</h1>')
})

app.listen(5000);