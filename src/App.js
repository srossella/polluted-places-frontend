import './App.css';
import React from 'react';
import Search from './pages/Search.js'
import Upload from './pages/Upload.js'
import Update from './pages/Update.js'
import Delete from './pages/Delete.js'
import Navbar from './components/Navbar';
import Home from './pages/Home.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from './components/Footer.js';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
       
                <Router>
                  <Navbar />
                  <br/>
                  
                  <Switch>
                    <Route exact path="/">
                      <Home/> 
                    </Route>
                    <Route exact path="/upload"> 
                       <Upload />  
                    </Route>
                    <Route exact path="/search"> 
                        <Search />  
                    </Route>
                    <Route exact path="/update/:id"> 
                      <Update /> 
                    </Route>
                    <Route exact path="/delete/:id"> 
                      <Delete /> 
                    </Route>
                    <Route path="*">
                      <NotFound/>
                    </Route>

                  </Switch>
                </Router> 

                <Footer/> 
    </div>
  );
}

export default App;
