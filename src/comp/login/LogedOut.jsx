import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogedOut = () => {
const navigate = useNavigate()
 

      const handleGoHome =() =>{
        navigate("/")
      }
  return (
    <div className='login_succes'>
      
    <h1 className='login_succes_title'>Logged Out </h1>
  
     <button className='login_succes_btnGo'onClick={handleGoHome}>Go home</button>
   </div>  
  )
}

export default LogedOut

