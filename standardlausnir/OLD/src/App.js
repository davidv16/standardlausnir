import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// styles
import './style.css'


// pages
import Temporary from './views/Temporary/Temporary'

const App = () => (
  <Switch>
    <Route exact path='/' component={Temporary} />
  </Switch>
);



export default App;
