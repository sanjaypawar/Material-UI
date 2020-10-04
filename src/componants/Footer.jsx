import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
  
const useStyles = makeStyles(()=> ({
  TypographyStyles: {
    flex: 1,
  }
}));
const Footer =() =>{
    const classes = useStyles();
    return (
    <AppBar color= "inherit" position='static'>
    <Toolbar  color="inherit">
      <Typography className= {classes.TypographyStyles} variant="h6">
        Footer
      </Typography>
    </Toolbar>
  </AppBar>
    );
   };
export default Footer;