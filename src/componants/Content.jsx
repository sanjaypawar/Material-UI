import React from 'react';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
    spacing: {
      paddingTop: "50px"
    }
  });

const Content =() =>{
    const classes = useStyles();
    return (
    <h1 className= {classes.spacing}>This is Content</h1>
    );
   };
export default Content;