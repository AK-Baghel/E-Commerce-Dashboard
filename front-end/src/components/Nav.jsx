import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = () => {
        console.log('apple');
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <>
            {
                auth ? <ul className='nav-ul'>
                <img className='logo' onClick={()=>{navigate("/")}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETvC0XoZ1UHOe8NxPx2AK5WCKS-J1RUuEpw&usqp=CAU" alt="logo" />
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update'>Update Product</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link onClick={logout} to='/signup' >Logout ({JSON.parse(auth).name})</Link></li>
                </ul>
                
                :
                <ul className='nav-ul nav-right'>
                     <img className='logo logo-left' onClick={()=>{navigate("/")}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETvC0XoZ1UHOe8NxPx2AK5WCKS-J1RUuEpw&usqp=CAU" alt="logo" />
                    <li><Link to='/signup'>Sign Up</Link></li>
                   <li><Link to='/login'>Login</Link></li>
                </ul>
            }
        </>
    )
}

export default Nav; 