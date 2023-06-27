import React, {useState} from 'react'

const AddProduct=()=> {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    
    const addProduct=()=>{
        console.log(name , price , category , company);
    }
  return (
    <div className='product'>
        <h1>Add Your Product</h1>
        <input className='inputBox' type="text" onChange={(e)=>{setName(e.target.value)}} value={name}  placeholder='Enter product name'/>
        <input className='inputBox' type="text" onChange={(e)=>{setPrice(e.target.value)}} value={price}  placeholder='Enter product price'/>
        <input className='inputBox' type="text" onChange={(e)=>{setCategory(e.target.value)}} value={category}  placeholder='Enter product category'/>
        <input className='inputBox' type="text" onChange={(e)=>{setCompany(e.target.value)}} value={company}  placeholder='Enter product company'/>
        <button className='appButton' onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default AddProduct