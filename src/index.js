import React, { Component} from 'react';
import { render } from 'react-dom';

import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App';
import CounterBlue from './CounterBlue'; 
import CounterRed from './CounterRed'; 



const root = document.getElementById('root');

const routes = (
  <Router history={ hashHistory}>
    <Route path='/' component={ App }>
      <Route path='red' component={ CounterRed } />
      <Route path='blue' component={ CounterBlue } />
    </Route>
   </Router>
);



render(routes, root);
