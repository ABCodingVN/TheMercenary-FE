import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './Componets/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/index';


function App() {
  return (
   
    
    <Switch>
    <Route path={"/"} component= {Login} exact /> 
    <Route path={"/home"} component={Home} exact /> 
    </Switch>

   
     
  );
}

export default App;
