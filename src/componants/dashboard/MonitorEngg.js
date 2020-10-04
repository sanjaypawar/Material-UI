import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import Drawer from '../Drawer';

  
const MonitorEngg =() =>{
    
        return(
            <Grid container direction="column">
                <Grid item>
                    <Header/>    
                </Grid>
                <Grid item container>
                <Grid item xs={0} sm={1}>
                    <Drawer/>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Content/>
                </Grid>
                <Grid item xs={0} sm={2}/>
               
                </Grid>
                <Footer/>
            </Grid>
            

        );
   
};
export default MonitorEngg;