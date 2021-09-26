import React from 'react';
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar';
import { Button } from '@mui/material';
function Home(props) {
    return (
        <div>
          
           Here we keep track of all the polluted places 
           <br/>
           <br/>
            <Link to="/search">
              <Button >
                  Browse polluted places
              </Button>
            </Link>
        </div>
    );
}

export default Home;