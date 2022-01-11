import React from 'react';
import Grid from '@material-ui/core/Grid';
import PlaceCard from './PlaceCard';

const PlacesContainer = ({places}) => {
    return (
        <Grid container  display="flex" style={{ justifyContent: 'center'}} >
                               
            {places.map(place=>(
                <PlaceCard place={place} key={place.id}/>
            )
            )
            }
  
        </Grid>
    );
};

export default PlacesContainer;