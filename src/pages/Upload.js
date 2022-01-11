import React from 'react';
import PostPlace from '../components/PostPlace';

function Upload(props) {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'auto'}}>
            <PostPlace/>
        </div>
    );
}

export default Upload;