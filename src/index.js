import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import './index.css';
import App from './App';

render(
  <HashRouter>
    <Switch>
      <Route
        path="/"
        component={App}
        exact
      />
    </Switch>
  </HashRouter>,
  document.getElementById('root'),
);
