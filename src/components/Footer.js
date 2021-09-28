import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  footer:{
    position: 'fixed',
    bottom:'0', 
    backgroundColor:'white',
    height:'30px',
    width:'100vw',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    fontSize:'0.7em',
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer} >
      Rossella Salaro 2021
    </div>
  );
}