import React from 'react';
import UpdatePlace from '../components/UpdatePlace';
import { Link } from 'react-router-dom';

function Update(props) {
    return (
        <div>
            this is the update page 
            <UpdatePlace/>
            <Link to="/">
                Home
            </Link>
        </div>
    );
}

export default Update;