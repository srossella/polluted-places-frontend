import React from 'react';
import DeletePlace from '../components/DeletePlace';
import { Link } from 'react-router-dom';

function Delete(props) {
    return (
        <div>
            this is the update page 
            <DeletePlace/>
            <Link to="/">
                Home
            </Link>
        </div>
    );
}

export default Delete;