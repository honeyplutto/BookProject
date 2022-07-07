import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { reset, registration } from '../../store/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

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


    const handleSubmit = (e) => {
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
      
            dispatch(registration(userData));
          }
    };

    const handleChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name] : e.target.value
        }))
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
    <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" justifyContent="center" direction="column">
            <h1>Registration</h1>
          <Grid item>
            <TextField
              id="name-input"
              name="name"
              label="Name"
              type="text"
              value={name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="email-input"
              name="email"
              label="Email"
              type="text"
              value={email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item>
            <TextField
              id="password-input"
              name="password"
              label="Password"
              type="text"
              value={password}
              onChange={handleChange}
            />
          </Grid>

          <Grid item>
            <TextField
              id="confirm-password-input"
              name="confirmPassword"
              label="Confirm Password"
              type="text"
              value={confirmPassword}
              onChange={handleChange}
            />
          </Grid>

          <Button 
              variant="contained" 
              color="primary" 
              type="submit"
              style={{
                'marginTop' : '10px'
              }}
              >
            Registration
          </Button>
        </Grid>
    </form>
  )
}

export default Registration