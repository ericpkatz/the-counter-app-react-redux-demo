import React, { Component} from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App';
import CounterBlue from './CounterBlue'; 
import CounterRed from './CounterRed'; 



const root = document.getElementById('root');

const routes = (
  <Provider store={ store }>
    <Router history={ hashHistory}>
      <Route path='/' component={ App }>
        <Route path='red' component={ CounterRed } />
        <Route path='blue' component={ CounterBlue } />
      </Route>
     </Router>
   </Provider>
);



render(routes, root);
