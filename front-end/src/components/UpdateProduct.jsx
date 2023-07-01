import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
const UpdateProduct = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [company, setCompany] = useState("")
  const params=useParams();
  const navigate=useNavigate();

  useEffect(()=>{
    getProductDetails();
  },[]);

  const getProductDetails=async()=>{
    let result=await fetch(`http://localhost:5000/product/${params.id}`);
    result=await result.json();
    console.log(result);
    setName(result.name);
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)

  }
  const updateProduct=async()=>{
    console.log(name,price,category,company);
    let result=await fetch(`http://localhost:5000/product/${params.id}`,{
      method:'put',
      body:JSON.stringify({name,price,category,company}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    result=await result.json();
    console.log(result);
    navigate('/')
  }


  return (
    <div className='product'>
      <h1>Update Your Product</h1>
      <input className='inputBox' type="text" onChange={(e) => { setName(e.target.value) }} value={name} placeholder='Enter product name' />
      <input className='inputBox' type="text" onChange={(e) => { setPrice(e.target.value) }} value={price} placeholder='Enter product price' />
      <input className='inputBox' type="text" onChange={(e) => { setCategory(e.target.value) }} value={category} placeholder='Enter product category' />
      <input className='inputBox' type="text" onChange={(e) => { setCompany(e.target.value) }} value={company} placeholder='Enter product company' />
      <button className='appButton' onClick={updateProduct}>Update Product</button>
    </div>
  )
}

export default UpdateProduct