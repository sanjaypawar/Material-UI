import React from 'react';
import {Drawer as MUIDrawer, ListItem, List, ListItemText} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {withRouter} from "react-router-dom";
import AppBarNew from './AppBarNew';
import { Grid } from '@material-ui/core';

  
const useStyles = makeStyles({
  paper: {
    width: "200px",
  },
  TypographyStyles: {
    flex: 1
  },
  gridflex: {
    flexGrow: 1,
    textAlign: 'center'
  },
  Drawerheight: {
    width: "150px",
    paddingTop: "60%",
    backgroundColor: "#3366ff"
  }
});

const Drawer = props =>{
    const { history } = props;
    const classes = useStyles();
    const itemList = [
        {
            text:'Monitoring Engineering',
            icon: <InboxIcon />,
            onClick: () => history.push('/')
        },
        {
            text:'iHear',
            icon: <MenuIcon />,
            onClick: () => history.push('/about')
        },
        {
            text:'My Requests',
            icon: <MailIcon />,
            onClick: () => history.push('/content')
        },
        {
            text:'Requests'
        }];
    return (
        <>
            <MUIDrawer variant="permanent" className= {classes.paper}>
                <AppBarNew/>
                <List className= {classes.Drawerheight}>
                    {itemList.map((item, index) => {
                        const { text, icon, onClick} =item;
                        return (
                    <ListItem button key={text} onClick={onClick}>
                        <div className={classes.gridflex}>
                        <Grid container spacing={1}>
                            <Grid item xs>
                            {icon}
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid item xs>
                            <ListItemText primary={text} />
                            </Grid>
                        </Grid>
                        </div>
                    </ListItem>
                    )})}
                </List>
            </MUIDrawer> 
            
        </>
    );
   };
export default withRouter(Drawer);