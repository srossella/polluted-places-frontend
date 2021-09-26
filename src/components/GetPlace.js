import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Button from '@mui/material/Button';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Popup from './Popup';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { fontSize } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color:
    'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    
  }));

function GetPlace() {

    const [placeId, setPlaceId] = useState('');
    const [places, setPlaces] = useState([]);

    const retrieveData = url => { axios.get( url ).then( res => {
                const placesReceived = [];
                for (let i = 0; i < res.data.length; i++) {
                    const place = {
                        id: res.data[i].id,
                        street: res.data[i].street,
                        town: res.data[i].town,
                        province: res.data[i].province,
                        imagePath: res.data[i].filepath,
                    }
                    placesReceived.push(place)
                }
                placesReceived.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
                setPlaces(placesReceived)
            })
            .catch(err=>{
                console.log(err)
                setPlaces([])
            })
    }

    const searchById = () => {
        if (placeId){
            const url= '/places/'+ placeId;
            retrieveData(url)
        }
    }

    const searchAll = () => {
        const url= '/places/';
        retrieveData(url)
    }

    const updatePlace = () => {

    }

    
    return (
        <>
        <Search style={{width:'200px', margin:'auto'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Type ID…"
                inputProps={{ 'aria-label': 'search'}}
                type="number"
                min="0"
                onChange={(e) => setPlaceId( e.target.value )} 
            />
          </Search>

            <Button variant="contained" onClick={searchById} >Search place by ID</Button>
           
            <Button variant="contained" onClick={searchAll} >Show all places</Button> 
            <Grid container  display="flex" style={{ justifyContent: 'center'}} >
                               
                 {places.map(place=>(
                   <div style={{ padding: '10px'}} key={place.id}>
                      <Card style={{ width: 300 }} >
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="place">
                                {place.id}
                            </Avatar>
                            }
                            style={{ textAlign: 'left'}}
                            title={`${place.street}, ${place.town}, ${place.province}`}
                            subheader="September 14, 2016"
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
                                     <Button >Update </Button>
                                </Link>
                            </IconButton>
                            <IconButton aria-label="delete">
                                <Link to={`/delete/${place.id}`} style={{ textDecoration: 'none'}}> 
                                     <Button >Delete </Button>
                                </Link>
                            </IconButton>
                        </CardActions>
                    </Card>
                   </div>
                )
                )}
           
           </Grid>
        </>
    );
}

export default GetPlace;