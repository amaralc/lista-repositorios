import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import Repository from '../pages/Repository';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} isPrivate />
      <Route exact path="/repository" component={Repository} isPrivate />
      <Route exact path="/signin" component={SignIn} isSign />
      <Redirect to="/" />
    </Switch>
  );
}
