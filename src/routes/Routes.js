import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" exact={true}>
          <h3>register</h3>
        </Route>
        <Route path="/login" exact={true}>
          <h3>login</h3>
        </Route>
        <Route path="/products" exact={true}>
          <h3>products</h3>
        </Route>
        <Route path="/users/:user_id/profile" exact={true}>
          <h3>profile</h3>
        </Route>
        <Route path="/users/:user_id/cart" exact={true}>
          <h3>cart</h3>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
