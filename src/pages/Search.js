import React from 'react';
import GetPlace from '../components/GetPlace';
import { Link } from 'react-router-dom';


function Search(props) {
    return (
        <div>
            this is search page 
            <GetPlace/>
            <Link to="/">
                Home
            </Link>
        </div>
    );
}

export default Search;