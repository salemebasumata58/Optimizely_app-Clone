import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import PartnersPage from '../Pages/PartnersPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/partners' element={<PartnersPage/>}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
    </Routes>
  )
}

export default AllRoutes