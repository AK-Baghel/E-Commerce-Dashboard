import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from './components/Nav'
import Footer from './components/Footer'
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent />}>          {/*part of outlet in this route all compo. will show only after sign up. This is part of Private Component*/}
            <Route exact path="/" element={<h1>{<ProductList/>}</h1>} />
            <Route exact path="/add-product" element={<AddProduct/>} />
            <Route exact path="/update/:id" element={<h1>product Updating here</h1>} />
            <Route exact path="/logout" element={<h1>product Logout from here</h1>} />
            <Route exact path="/profile" element={<h1>Profile</h1>} />
          </Route>
            <Route exact path="/signup" element={<SignUp />}>Sign Up</Route>
            <Route exact path="/login" element={<Login/>} ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;