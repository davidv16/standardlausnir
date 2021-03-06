import React from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Home Layout 
import Home from './Views/Home';


// Element Layout
import error404 from "./Views/error404";



import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


function Root() {
  return (
    <BrowserRouter basename={'/'}>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />


        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
        <Route component={error404} />

      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();