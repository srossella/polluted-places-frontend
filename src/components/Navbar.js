import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const Navbar = () => {
   
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='primary'>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            <Link to={'/'} style={{ textDecoration: 'none'}}> 
                <HomeIcon/>
            </Link>
            </IconButton>
            <Typography variant="h6" textAlign='left' component="div" sx={{ flexGrow: 1 }}>
              Polluted places
            </Typography>
            <Button color="inherit" variant="contained" style={{marginRight: '20px'}}>
                <Link to={'/search'} style={{ textDecoration: 'none'}}> 
                    Search
                </Link>
            </Button>
            <Button color="inherit"  variant="contained">
                <Link to={'/upload'} style={{ textDecoration: 'none'}}> 
                    Upload
                </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navbar;