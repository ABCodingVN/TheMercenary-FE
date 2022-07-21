import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './Componets/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/index';
import OTPBox from './pages/Login/components/OTP/Otp';
import Regform from './pages/Login/components/RegForm/Regform';

function App() {
  return (
   
    
    <Switch>
    <Route path={"/"} component= {Login} exact /> 
    <Route path={"/home"} component={Home} exact /> 
    <Route path={"/otp"} component={OTPBox} exact /> 
    <Route path={"/dangky"} component={Regform} exact /> 

    </Switch>

   
     
  );
}

export default App;
