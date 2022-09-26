import { useEffect, useState } from 'react'

import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './comp/routes/Home'
import ProductDetail from './comp/routes/ProductDetail'
import Purchases from './comp/routes/Purchases'
import Login from './comp/routes/Login'
import Header from './comp/Shared/Header'
import axios from 'axios'
import Cart from './comp/Shared/Cart'
import ProtectedRoutes from './comp/routes/ProtectedRoutes'
import LogSucces from './comp/login/LogSucces'
import LogedOut from './comp/login/LogedOut'
import { SignUp } from './comp/SingUp/SignUp'
import { Footer } from './comp/Shared/Footer'





function App() {
  useEffect(() => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users"
    /*este no loguea*

    /* const obj = {
 
       firstName: 'koudelka',
       lastName: 'kikokun',
       email: "leokoukikodel684@gmail.com",
       password: "as4as4f45as54fg",
       phone: '3132773333',
       role: "dormir",
     }
 
     axios.post(URL, obj)
       .then(res => console.log(res.data))
       .catch(err => console.log(err))
 */

  }, [])


  return (
    <div className="App">
      <Header />

      <Routes>

        <Route path="/out" element={<LogedOut />} />
        <Route path="/" element={<Home />} />
        <Route path="/logged" element={<LogSucces />} />
        <Route path="/register" element={<SignUp />} />
        <Route  path="/login" element={<Login />} />
        <Route path="/out" element={<LogedOut />} />

        <Route path="/product/:id" element={<ProductDetail />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/cart" element={<Cart />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
