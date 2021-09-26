import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useState } from 'react';

const Popup = (place , togglePopup ) => {



  

    return (
        <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={e=>togglePopup()}>
            X
          </span>
         Are you sure you want to update?
         <Link to={`/update/${place.id}`} style={{ textDecoration: 'none'}}> 
            <Button> Update </Button>
        </Link>
        </div>
      </div>
    );
};

export default Popup;