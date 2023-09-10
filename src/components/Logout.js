import React from 'react'
import { logout } from '../services/user.service'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '../services/AuthProvider'


  
const CerrarSesion = () => {
    // const navigate = useNavigate();
    // const {setAuth} = useAuth();

    // logout();
    // setAuth(false)
    // useEffect(()=>{
        
    //     navigate("/")
    // })
   
  return (
    <div>Logout</div>
  )
}

export default CerrarSesion