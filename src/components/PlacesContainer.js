import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Button from '@mui/material/Button';
import Grid from '@material-ui/core/Grid';
import PlaceCard from './PlaceCard';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { fontSize } from '@mui/system';

const PlacesContainer = ({places}) => {
    return (
        <Grid container  display="flex" style={{ justifyContent: 'center'}} >
                               
            {places.map(place=>(
                <PlaceCard place={place} key={place.id}/>
            )
            )}
  
        </Grid>
    );
};

export default PlacesContainer;