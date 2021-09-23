import React from 'react';
import PostPlace from '../components/PostPlace';
import { Link } from 'react-router-dom';

function Upload(props) {
    return (
        <div>
            this is the upload page 
            <PostPlace/>
            <Link to="/">
            Home
            </Link>
        </div>
    );
}

export default Upload;