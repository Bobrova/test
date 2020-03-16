import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import './index.css';
import App from './App';
import Gallery from './Gallery';

render(
  <HashRouter>
    <Switch>
      <Route
        path="/"
        component={App}
        exact
      />
      <Route
        path="/main"
        component={Gallery}
        exact
      />
    </Switch>
  </HashRouter>,
  document.getElementById('root'),
);
