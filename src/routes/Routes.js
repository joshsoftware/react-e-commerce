import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationContainer from '../containers/RegistrationContainer';
import LoginContainer from '../containers/LoginContainer';
import ProductContainer from '../containers/ProductContainer';
import CartContainer from '../containers/CartContainer';
import UserProfile from '../components/UserProfile';
import UserProfileUpdateContainer from '../containers/UserProfileUpdateContainer';
import AdminDashboardContainer from '../containers/AdminDashboardContainer';
import AddProductContainer from '../containers/AddProductContainer';
import UpdateProductContainer from '../containers/UpdateProductContainer';
import AdminMainDashboardContainer from '../containers/AdminMainDashboardContainer';
import AdminUserDashboardContainer from '../containers/AdminUserDashboardContainer';
import SetPasswordContainer from '../containers/SetPasswordContainer';

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
        <Route path="/profile/update" exact={true}>
          <UserProfileUpdateContainer />
        </Route>
        <Route path="/admindashboard" exact={true}>
          <AdminMainDashboardContainer />
        </Route>
        <Route path="/admin/products" exact={true}>
          <AdminDashboardContainer />
        </Route>
        <Route path="/admin/users" exact={true}>
          <AdminUserDashboardContainer />
        </Route>
        <Route path="/admin/addproduct" exact={true}>
          <AddProductContainer />
        </Route>
        <Route path="/admin/updateproduct" exact={true}>
          <UpdateProductContainer />
        </Route>
        <Route path="/verifyUser" render={(props) => <SetPasswordContainer {...props} />} />
      </Switch>
    </Router>
  );
};

export default Routes;
