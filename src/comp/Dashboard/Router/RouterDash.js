import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Order from '../Order/Order';
import Users from '../User/Users';
import Product from '../Product/Product';
import NavDash from '../NavDash/NavDash';

const RouterDash = () => {
  return (
    <>
     
    <Routes> 
           
        <Route path='/product' element={<Product/>}/>
        <Route path='/users' element={<Users/>}/>
    </Routes>
    </>
  )
}

export default RouterDash