import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogSucces = () => {
  const navigate = useNavigate()

  const handleLogout =()=> {
    localStorage.removeItem("token")
    navigate("/out")


  }


  const handleGoHome =() =>{
    navigate("/")
  }
  return (
    <div className='login_succes'>
      
      <h1 className='login_succes_title'>Login Succesfully completed</h1>
       
      <button className='login_succes_btnLg'onClick={handleLogout}>Sing out</button>
       <button className='login_succes_btnGo'onClick={handleGoHome}>Go home</button>
     </div>  
    
  )

}

export default LogSucces