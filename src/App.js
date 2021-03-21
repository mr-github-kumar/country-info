import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

//Import Components
import Header from './component/Header';
import Main from './component/Main';
import SingleCountry from './component/SingleCountry'

function App() {  
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/country/:alpha3Code">
          <SingleCountry/>
        </Route>
      </Switch>
    </Router>       
  );
}

export default App;
