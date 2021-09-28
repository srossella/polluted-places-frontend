import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Button from '@mui/material/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';

function PlaceCard({place}) {
    
    return (
       
        <div style={{ padding: '10px'}} key={place.id}>
                      <Card style={{ width: 300 }} >
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: purple[500] }} aria-label="place">
                                {place.id}
                            </Avatar>
                            }
                            style={{ textAlign: 'left', minHeight:'60px'}}
                            title={`${place.street}, ${place.town}, ${place.province}`}
                            subheader={place.date}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={`http://localhost:8000/${place.imagePath}`}
                            alt="Polluted place"
                        />
                         <CardActions disableSpacing>
                        
                               
                            <IconButton aria-label="update">
                                <Link to={`/update/${place.id}`} style={{ textDecoration: 'none'}}> 
                                     <Button variant='outlined' color='secondary' >Update </Button>
                                </Link>
                            </IconButton>
                            <IconButton aria-label="delete">
                                <Link to={`/delete/${place.id}`} style={{ textDecoration: 'none'}}> 
                                     <Button variant='outlined' color='secondary'  >Delete </Button>
                                </Link>
                            </IconButton>
                        </CardActions>
                    </Card>
                   </div>
       
    );
}

export default PlaceCard;