import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from '@mui/material';

function Home() {

    return (
        <div>
           <h2 style={{marginBottom:'20px'}}>Here we keep track of all the polluted places </h2>
            <Link to="/search" style={{textDecoration:'none'}}>
              <Button variant='contained' >
                  Browse polluted places
              </Button>
            </Link>
        </div>
    );
}

export default Home;