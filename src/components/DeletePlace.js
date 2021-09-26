import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function DeletePlace() {
    const {id} = useParams();

    
    const [postedPlace, setPostedPlace] = useState('')

    const deletePlace = () => {
   
        const url='/places/'+id;
    
        axios.delete(url)
            .then((res) => {
                console.log(res)
                setPostedPlace('place with id '+id+' has been deleted')
            })
    }
    
    return (
        <div>
           <button onClick={deletePlace}> delete </button>
            this is to Delete a  place 
            <br/>
            {postedPlace}
        </div>
    );
}

export default DeletePlace;