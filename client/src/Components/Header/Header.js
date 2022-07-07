import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { reset, logout } from '../../store/auth/authSlice'

export default function Header() {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/')
  }
  
  return (

    <AppBar position="sticky" color="default" >
      <Container maxWidth="md">
        <ToolBar disableGutters>
          <Hidden xsDown>
            {user.user ? (
              <>
                <Avatar style={{'marginRight' : '10px'}} />
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={onLogout}
                >
                  Logout
                </Button>
              </>
              ) : ( 
              <>
                <Link 
                  to='/login'
                  style={{
                    'textDecoration' : 'none',
                    'color' : '#3f51b5',
                    'marginRight' : '10px',
                    'fontSize' : '18px'
                  }}>
                    Login
                  </Link>
                <Link 
                  to='/registration'
                  style={{
                    'textDecoration' : 'none',
                    'color' : '#3f51b5',
                    'marginRight' : '10px',
                    'fontSize' : '18px'
                  }}>
                    Registration
                  </Link>
              </>
             )}
           
          </Hidden>
          <Hidden smUp>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </ToolBar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem>
                <Link to='/login' >Login</Link>
                <Link to='/registration' >Registration</Link>
            </ListItem>
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}