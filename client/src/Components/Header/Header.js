import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Header() {
  return (
    <div className='navbar'>
        <h1>logo</h1>
        <Link to='/'>Dashboard</Link>
        <Link to='/login'>Login</Link>
        <Link to='/registration'>Registration</Link>
    </div>
  )
}

export default Header