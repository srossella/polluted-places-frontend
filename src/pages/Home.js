import React from 'react';
import {Link} from 'react-router-dom'

function Home(props) {
    return (
        <div>
            this is home page 
            <Link to="/upload">
                    <button >
                      go to upload place
                    </button>
            </Link>
            <Link to="/search">
                    <button >
                      go to search
                    </button>
            </Link>
        </div>
    );
}

export default Home;