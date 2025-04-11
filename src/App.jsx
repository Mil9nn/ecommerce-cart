import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Store from "./pages/Store"
import Cart from "./pages/Cart"
import Header from './components/Header';

function App() {
  

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Store/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  )
}

export default App
