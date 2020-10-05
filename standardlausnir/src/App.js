import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Temporary from './components/Temporary'
import './style.css'

const App = () => (
  <Switch>
    <Route exact path='/' component={Temporary} />
  </Switch>
);



export default App;
