import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Components/Products'
import NomatchRoute from '../Components/NomatchRoute'
import Product from '../Components/Product'

const Routing = () => {
  return (
    <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<Product />}  />
        <Route path='*' element={<NomatchRoute />} />
    </Routes>
  )
}

export default Routing