import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationContainer from '../containers/RegistrationContainer';
import LoginContainer from '../containers/LoginContainer';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" exact={true}>
          <RegistrationContainer />
        </Route>
        <Route path="/login" exact={true}>
          <LoginContainer />
        </Route>
        <Route path="/products" exact={true}>
          <ProductContainer />
        </Route>
        <Route path="/users/:user_id/profile" exact={true}>
          <h3>profile</h3>
        </Route>
        <Route path="/cart" exact={true}>
          <CartContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
