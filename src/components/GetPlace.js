import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import PlacesContainer from  './PlacesContainer';
import Button from '@mui/material/Button';
import Grid from '@material-ui/core/Grid';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Card } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setAllPlaces } from '../redux/actions/productActions';

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
  const {places} = useSelector(state => state.setAllPlaces)
  const dispatch = useDispatch()

  const retrieveData = async (url) => {
      const res = await axios.get(url)
      .catch(err=>console.log('err: '+err))
      
      const placesReceived = [];
      if(res.data && res.data.length>0){
                for (let i = 0; i < res.data.length; i++) {
                    const place = {
                        id: res.data[i].id,
                        street: res.data[i].street,
                        town: res.data[i].town,
                        province: res.data[i].province,
                        imagePath: res.data[i].filepath,
                        date: res.data[i].date
                    }
                    placesReceived.push(place)
                }
                placesReceived.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
      }
      dispatch(setAllPlaces(placesReceived))
  }

    const [placeId, setPlaceId] = useState('');
    const [placeTown, setPlaceTown] = useState('');
   
    const searchById = () => {
        if (placeId){
            const url= '/places/id/'+ placeId;
            retrieveData(url)
        }
    }
    const searchByTown = () => {
      if (placeTown){
          const url= '/places/town/'+ placeTown;
          retrieveData(url)
      }
  }

    const searchAll = () => {
        const url= '/places/';
        retrieveData(url)
    }

    return (
        <>
        <Grid container display="flex" style={{alignItems:'end',width:'500px',  justifyContent:'space-between', margin:'auto'}} >
        <Card style={{padding:'10px',backgroundColor:'#DCEDFE'}}>
        <Grid item >
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

            <Button variant="contained" style={{width:'100%'}} onClick={searchById} >Search place by ID</Button>
          </Grid>
          </Card>
          <Card style={{padding:'10px', backgroundColor:'#DCEDFE'}}>
          <Grid item >
            
              <Search style={{width:'200px', margin:'auto'}}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Type town..."
                  inputProps={{ 'aria-label': 'search'}}
                  onChange={(e) => setPlaceTown( e.target.value )} 
                />
              </Search>
              <Button variant="contained" onClick={searchByTown} >Search place by town</Button>
          
          </Grid>
          </Card>
          <Grid item xs={12} md={12}  lg={12} style={{marginTop:'20px'}} >
              <Button variant="contained" color='secondary' onClick={searchAll} >Show all places</Button> 
          </Grid>
            </Grid>
            <PlacesContainer places={places}/>
        </>
    );
}

export default GetPlace;