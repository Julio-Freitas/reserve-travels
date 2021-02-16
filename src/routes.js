import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Reserves from './pages/reserves';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/reservas" exact component={Reserves} />
    </Switch>
  );
}
