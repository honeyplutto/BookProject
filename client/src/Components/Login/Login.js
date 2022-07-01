import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './style.css'
import { reset, login } from '../../Store/Auth/authSlice'

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const {
    email,
    password
  } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { 
    user, 
    isLoading, 
    isError, 
    isSuccess, 
    message 
  } = useSelector((state) => state.auth);

  const onChange = (e) => {
    setFormData((prefState) => ({
      ...prefState,
      [e.target.name]: e.target.value
    }));
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password
    };

    dispatch(login(userData));
  }

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }
    
    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset());

  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if(isLoading) {
    return (
       <h1>
        Loading...
       </h1>
  )}

  return (
    <div className='login-container'>
        <h1>Login</h1>

        <form onSubmit={onSubmit}>
          
          <div className='inputs'>
            <label>Email</label>
            <input 
              type="text" 
              name="email" 
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
              />
          </div>

          <div className='inputs'>
            <label>Password</label>
            <input 
              type="text" 
              name="password" 
              value={password}
              placeholder='Enter your password'
              onChange={onChange}
              />
          </div>

          <button 
            type="submit"
            style={{cursor: 'pointer'}}
          >
            Submit
          </button>

        </form>
    </div>
  )
}

export default Login