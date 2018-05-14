
/* eslint react/jsx-max-props-per-line: 0 */
/* eslint react/jsx-sort-props: 0 */ 
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import App from './App';

import Home from './../routes/home'
import NotFound from './../routes/not-found'
import { store as Store, user as User, show as Show } from './../routes'
const Root = (props) => {
  return (
    <Router>
      <App>
        <Switch>    
          <Route exact path="/" render={() => (
            <Redirect to="/_home" />
          )}/>
          <Route exact path="/_home" component={Home} />
          <Route exact path="/_store" component={Store} />
          <Route exact path="/_user" component={User} />
          <Route exact path="/_user/show/:email" component={Show} />
          <Route path="*" component={NotFound} />
        </Switch>
      </App>
    </Router>
  );
};

export default Root;