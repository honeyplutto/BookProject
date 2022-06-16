import React, { useState, useEffect } from 'react'
import './style.css'

function Registration() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='registration-container'>
        <h1>Registration</h1>

        <form onSubmit={onSubmit}>
          <div className='inputs'>
            <label for="">Name</label>
            <input 
              type="text" 
              name="name"
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
              />  
          </div>

          <div className='inputs'>
            <label for="">Email</label>
            <input 
              type="text"
              name="email"
              value={email}
              placeholder='Enter your email' 
              onChange={onChange}
              />  
          </div>

          <div className='inputs'>
            <label for="">Password</label>
            <input 
              type="text" 
              name="password" 
              value={password} 
              placeholder='Enter your password'
              onChange={onChange}
              />  
          </div>

          <div className='inputs'>
            <label for="">Confirm Password</label>
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