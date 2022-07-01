import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './style.css'
import { reset, register } from '../../Store/Auth/authSlice'

function Registration() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { 
    name, 
    email, 
    password, 
    confirmPassword 
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
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(password !== confirmPassword) {
      toast.error('Password do not match')
    } else {
      const userData = {
        name,
        email,
        password,
        confirmPassword
      }

      dispatch(register(userData));
    }
  }

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }
    
    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset());

  }, [user, isError, isSuccess, message, navigate, dispatch])


  if(isLoading) {
    return (
       <h1>
        Loading...
       </h1>
  )}


  return (
    <div className='registration-container'>
        <h1>Registration</h1>

        <form onSubmit={onSubmit}>
          <div className='inputs'>
            <label >Name</label>
            <input 
              type="text" 
              name="name"
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
              />  
          </div>

          <div className='inputs'>
            <label >Email</label>
            <input 
              type="text"
              name="email"
              value={email}
              placeholder='Enter your email' 
              onChange={onChange}
              />  
          </div>

          <div className='inputs'>
            <label >Password</label>
            <input 
              type="text" 
              name="password" 
              value={password} 
              placeholder='Enter your password'
              onChange={onChange}
              />  
          </div>

          <div className='inputs'>
            <label >Confirm Password</label>
            <input 
              type="text" 
              name="confirmPassword" 
              value={confirmPassword} 
              placeholder='Enter your confirm password'
              onChange={onChange}
              />  
          </div>
          
          <button 
            type="submit"
            style={{cursor: 'pointer'}}>
              Submit
          </button>
        </form>
    </div>
  )
}

export default Registration