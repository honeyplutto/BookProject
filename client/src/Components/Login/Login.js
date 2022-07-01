import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { reset, login } from '../../Store/Auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

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

  const handleChange = (e) => {
    setFormData((prefState) => ({
      ...prefState,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
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
    <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" justifyContent="center" direction="column">
            <h1>Login</h1>
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

          <Button 
              variant="contained" 
              color="primary" 
              type="submit">
            Submit
          </Button>

          </Grid>
        </form>
  )
}

export default Login