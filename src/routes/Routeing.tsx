import React from 'react'
// import {  } from 'react-router'
import { HashRouter,Route, Routes } from 'react-router-dom'
import Register from '../features/register/registerView/Register'
import Cart from '../pages/cart/Cart'
import Home from '../pages/home/Home'

const Routering = () => {
  return (
    <>
     <HashRouter >
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="productdetails/:id" element={<Product/>}/> */}
          </Route>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default Routering