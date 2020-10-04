import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';



  const useStyles = makeStyles({
    height: {
      paddingTop: "80px"
    }});
    function handleClick(event) {
      event.preventDefault();
      console.info('You clicked a breadcrumb.');
    }

const Breadcrumb =() =>{
  const classes = useStyles();
    return (
        <Breadcrumbs aria-label="breadcrumb" className= {classes.height}>
      <Link color="inherit" href="/" onClick={handleClick}>
        Material-UI
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Core
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
    )
   };
export default Breadcrumb;