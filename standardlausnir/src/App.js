import React from 'react';
import ReactDom from "react-dom"
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';

// styles
import './style.css'
import "./assets/scss/material-kit-react.scss?v=1.4.0";

// pages
import Temporary from './views/Temporary/Temporary'
import LandingPage from './views/LandingPage/LandingPage'

const App = () => (
  <Switch>
    <Route exact path='/' component={Temporary} />
    <Route exact path='/LandingPage' component={LandingPage} />
  </Switch>
);



export default App;
