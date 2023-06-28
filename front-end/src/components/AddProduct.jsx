import React, { useState } from 'react'

const AddProduct = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [company, setCompany] = useState("")
  const [error,setError]=useState(false);

  const addProduct = async () => {
    if(!name || !price || !category || !company){
      setError(true);
      return false;
    }
    console.log(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    const result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    result = await result.json();
    // console.log(result);
  }
  return (
    <div className='product'>
      <h1>Add Your Product</h1>
      <input className='inputBox' type="text" onChange={(e) => { setName(e.target.value) }} value={name} placeholder='Enter product name' />
      {error && !name && <span className='invalid-input'>Enter Valid Name</span>}
      <input className='inputBox' type="text" onChange={(e) => { setPrice(e.target.value) }} value={price} placeholder='Enter product price' />
      {error && !price && <span className='invalid-input'>Enter Valid Price</span>}
      <input className='inputBox' type="text" onChange={(e) => { setCategory(e.target.value) }} value={category} placeholder='Enter product category' />
      {error && !category && <span className='invalid-input'>Enter Valid Category</span>}
      <input className='inputBox' type="text" onChange={(e) => { setCompany(e.target.value) }} value={company} placeholder='Enter product company' />
      {error && !company && <span className='invalid-input'>Enter Valid Company</span>}
      <button className='appButton' onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default AddProduct