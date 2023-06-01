import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate=useNavigate();

    const collectData = () => {
        console.log(name, email, password);

        const collectData = async () => {
            let result = await fetch('http://localhost:5000/register', {
                method: 'post',
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            result = await result.json();
            console.warn(result);

            if(result)
                navigate('/');

        }

        collectData();
        
        setname("");
        setemail("");
        setpassword("");
    }
    return (
        <div className='register'>
            <h1>Register</h1>
            <input className='inputBox' type="text" value={name} onChange={(e) => { setname(e.target.value) }} placeholder='Enter Your Name' />
            <input className='inputBox' type="email" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder='Enter Your Email' />
            <input className='inputBox' type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder='Enter Your Password' />
            <button className='appButton' type='button' onClick={collectData}>Sign Up</button>
        </div>
    )
}
export default SignUp;