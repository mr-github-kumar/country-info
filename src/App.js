import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { useGlobalContext } from './context';

//Import Components
import Header from './component/Header';
import Main from './component/Main';
import SingleCountry from './component/SingleCountry';

function App() {  
  const { isActive, setActive } = useGlobalContext();

  const changeTheme = ()=> {
    setActive(!isActive);
  };

  return (
    <Router>
      <section className={isActive? "dark" : " "}>
        <section className="app-header">
          <Header action={changeTheme}/>
        </section>
        <Switch>
          <Route exact path="/country-info">
            <section className="app-main">
              <Main/>
            </section>
          </Route>
          <Route path="/country/:alpha3Code">
            <section className="app-country">
              <SingleCountry/>
            </section>
          </Route>
        </Switch>
      </section>
    </Router>       
  );
}

export default App;
