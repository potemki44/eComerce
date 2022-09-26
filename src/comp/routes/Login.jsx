import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import FormLogin from '../login/FormLogin'
import LogSucces from '../login/LogSucces'

const Login = () => {
  const token =  localStorage.getItem("token")



 
 
       if(token){
            return <LogSucces/>
            }
            
            else{
            return <FormLogin/>} 
      
      
    

  
}

export default Login