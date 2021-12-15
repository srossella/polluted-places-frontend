import React from 'react';
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar';
import { Button } from '@mui/material';
function Home(props) {
    return (
        <div>
          
           <h2>Here we keep track of all the polluted places </h2>
           <br/>
           <br/>
            <Link to="/search" style={{textDecoration:'none'}}>
              <Button variant='contained' >
                  Browse polluted places
              </Button>
            </Link>
        </div>
    );
}

export default Home;