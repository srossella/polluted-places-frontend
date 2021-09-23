import './App.css';
import React from 'react';
import Search from './pages/Search.js'
import Upload from './pages/Upload.js'
import Home from './pages/Home.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from './components/Footer.js'
import Place from './components/Place';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
       
                <Router>
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
