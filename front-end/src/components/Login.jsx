import React, { useState } from "react";

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const handleLogin=()=>{
        console.log(email)
        console.log(password)
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