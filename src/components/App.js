import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Auth from '../pages/Auth';
import Landing from '../pages/Landing';
import './app.scss';
import SignUp from '../pages/SignUp';

export default function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
}
