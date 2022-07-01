import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
  },
  avatar: {
    marginRight: "auto",
    color: "white",
    backgroundColor: "black",
    borderRadius: 0,
    height: 30,
    border: "2px solid gray",
    borderLeft: "12px solid transparent",
    borderRight: "12px solid transparent",
  },
}));

export default function Header() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  return (

    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
        <ToolBar disableGutters>
          <Hidden xsDown>
            <Link to='/' className={styles.link}>Books</Link>
            <Link to='/login' className={styles.link}>Login</Link>
            <Link to='/registration' className={styles.link}>Registration</Link>
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
                <Link to='/'>Books</Link>
                <Link to='/login'>Login</Link>
                <Link to='/registration'>Registration</Link>
            </ListItem>
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}