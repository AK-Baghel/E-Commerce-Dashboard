import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        console.log(auth);
        if(auth){
            navigate("/login");
        }
    },[]);
    const handleLogin=async ()=>{
        let result=await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result=await result.json();
        console.log(result);
        if(result){
            localStorage.setItem("user",JSON.stringify(result));
            navigate('/');
        }
        else{
            alert("Please Enter Correct Details");
        }
    }

    return (
        <div className="register">
            <h1>Login Page</h1>
            <input className="inputBox" onChange={(e)=>{setemail(e.target.value)}} value={email} type="email" placeholder="Enter Your Email" />
            <input className="inputBox" onChange={(e)=>{setpassword(e.target.value)}} value={password} type="password" placeholder="Enter Your Password" />
            <button className='appButton' onClick={handleLogin} type="submit">Login</button>
        </div>
    )
};

export default Login;