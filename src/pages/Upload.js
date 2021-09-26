import React from 'react';
import PostPlace from '../components/PostPlace';
import { Link } from 'react-router-dom';

function Upload(props) {
    return (
        <div>
          Here you can report a polluted place. 
          Please note all the fileds are required. 
            <PostPlace/>
         
        </div>
    );
}

export default Upload;