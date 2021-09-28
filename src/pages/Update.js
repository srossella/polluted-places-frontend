import React from 'react';
import UpdatePlace from '../components/UpdatePlace';
import { Link, useParams } from 'react-router-dom';

function Update(props) {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'auto'}}>
            
            
        
            <UpdatePlace/>
           
        </div>
    );
}

export default Update;