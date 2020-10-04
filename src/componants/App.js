import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MonitoringEngg from './MonitoringEngg';
import Content from './Content';
import MonitorEngg from './dashboard/MonitorEngg';
import About from './About';
import Drawer from './Drawer';

import { makeStyles } from '@material-ui/styles';
import Breadcrumb from './Breadcrumb';
  
const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});


export default function App(){
  const classes = useStyles();
  return(
    <>
    <div className= {classes.container}>
      <Router>
      <Drawer/>
      
      <Switch>
        <Route exact from="/" render={props =><MonitoringEngg {...props} />} />
        <Route exact path="/content" render={props =><Content {...props} />} />
        <Route exact path="/about" render={props =><About {...props} />} />
        <Route exact path="/MonitorEngg" render={props =><MonitorEngg {...props} />} />
      </Switch>
      <Breadcrumb/>
      </Router>
    </div>
    </>
  );
  }

