import React from 'react'
import NavBar from './NavBar/NavBar'
import "../App.css"
import { Outlet } from 'react-router-dom'

const Layout = (props) => {
  return (
    <div className='contenedor'>
    <NavBar />
<main>
<Outlet />
</main>

    
    
    </div>
  )
}

export default Layout