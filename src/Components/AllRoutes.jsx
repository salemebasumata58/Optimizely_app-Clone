import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import PartnersPage from '../Pages/PartnersPage'
import PlansPage from '../Pages/PlansPage'
import Products from '../Pages/Products'
import RequestPricingPage from '../Pages/RequestPricingPage'
import SignUp from '../Pages/SignUp'
import { PrivateRoute } from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/partners' element={<PrivateRoute><PartnersPage/></PrivateRoute>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/product' element={<PrivateRoute><Products/></PrivateRoute>}></Route>
        <Route path='/plans' element={<PrivateRoute><PlansPage/></PrivateRoute>}></Route>
        <Route path='/request-pricing' element={<PrivateRoute><RequestPricingPage/></PrivateRoute>}></Route>
    </Routes>
  )
}

export default AllRoutes