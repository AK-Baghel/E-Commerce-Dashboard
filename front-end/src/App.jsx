import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from './components/Nav'
import Footer from './components/Footer'
import SignUp from './components/SignUp';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="" element={<h1>React Js is here for you</h1>} />
          <Route exact path="add" element={<h1>product is Add here</h1>} />
          <Route exact path="update" element={<h1>product Updating here</h1>} />
          <Route exact path="logout" element={<h1>product Logour from here</h1>} />
          <Route exact path="profile" element={ <Link to='/'>Click me</Link>} />
          <Route exact path="signup" element={<SignUp/>}>Sign Up</Route>
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;