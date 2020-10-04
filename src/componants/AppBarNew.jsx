import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {AppBar, CssBaseline, Typography, Toolbar} from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const useStyles = makeStyles({
    TypographyStyles: {
    flex: 1
  }
});
const AppBarNew =() =>{
  const classes = useStyles();
  return (
  <>
    <CssBaseline />
    <AppBar position="fixed" color="default">
      <Toolbar>
          <Typography className= {classes.TypographyStyles} variant="h6" noWrap>
            Clipped drawer newww
          </Typography>
          <AccountCircleIcon/>
      </Toolbar>
    </AppBar>
  </>
  );
};
export default AppBarNew;