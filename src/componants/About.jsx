import React from 'react';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
    spacing: {
      paddingTop: "50px"
    }
  });

const About =() =>{
    const classes = useStyles();
    return (
    <h1 className= {classes.spacing}>This is About</h1>
    );
   };
export default About;