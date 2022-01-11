import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

function DeletePlace() {
    const {id} = useParams();

    const [placeDeleted, setPlaceDeleted] = useState(false)

    const deletePlace = () => {
   
        const url='/places/'+id;
    
        axios.delete(url)
            .then((res) => {
                console.log(res)
                setPlaceDeleted(true)
            })
    }
    
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <p style={{margin:'10px'}}>
                Are you sure you want to delete the place with ID {id}?
            </p>
            <Button style={{width:'fit-content', margin:'auto'}} variant='contained' onClick={deletePlace}>Yes, delete  </Button>

             <Link to="/search" style={{textDecoration:'none', margin:'10px'}}>
              <Button variant='outlined'>
               Back to search page
              </Button>
            </Link>
            {
                placeDeleted 
                ? `place with id ${id} has been deleted.`
                : null
            }
        </div>
    );
}

export default DeletePlace;