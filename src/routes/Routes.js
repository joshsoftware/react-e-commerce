import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationContainer from '../containers/RegistrationContainer';
import LoginContainer from '../containers/LoginContainer';
import ProductContainer from '../containers/ProductContainer';
import CartContainer from '../containers/CartContainer';
import UserProfile from '../components/UserProfile';

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
        <Route path="/cart" exact={true}>
          <CartContainer />
        </Route>
        <Route path="/profile" exact={true}>
          <UserProfile />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
