import React from 'react';
import { AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';
  
const useStyles = makeStyles(()=> ({
  TypographyStyles: {
    flex: 1
  }
}));
const Header =() =>{
    const classes = useStyles();
    return (
    <AppBar color= "inherit" position='static'>
    <Toolbar  color="inherit">
      <Typography className= {classes.TypographyStyles} variant="h6">
        This is our Header
      </Typography>
      <Button color="inherit">Login</Button>
      <AccountCircleIcon/>
    </Toolbar>
  </AppBar>
    );
   };
  export default Header;