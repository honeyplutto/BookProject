import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import { reset, logout } from '../../Store/Auth/authSlice'

function Header() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <div className='navbar'>
        <h1>logo</h1>
      {user ? (
        <>
          <button 
            type="button"
            onClick={onLogout}
            >
              Logout
          </button>
        </>
      ) : (
        <>
          <Link to='/'>Dashboard</Link>
          <Link to='/login'>Login</Link>
          <Link to='/registration'>Registration</Link>
        </>
      )}

    </div>
  )
}

export default Header