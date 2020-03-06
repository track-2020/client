import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Auth from '../pages/Auth';
import Landing from '../pages/Landing';
import Summary from '../pages/Summary';
import UserIssues from '../pages/UserIssues';
import Header from './Header';


export default function App() {
  return (
    <Router >
      <Header />
      <Switch>
        <Route exact path="/summary" component={Summary} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path = "/user-issues" component={UserIssues} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
}
