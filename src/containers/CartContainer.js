import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CartItemListContainer from './CartItemListContainer';
import CartHeader from '../components/CartHeader';
import NavigationBarComponent from '../components/NavigationBarComponent';
import Footer from '../components/Footer';
import { getCartItems } from '../actions/cartActions';
import AlertWrapper from '../components/AlertWrapper';
import alertReducer from '../reducers/alertReducer';
import { alertMessage } from '../actions/alertActions';

const CartContainer = () => {
  // const { userDetails } = useSelector((state) => state.loginReducer);
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  const dispatch = useDispatch();
  const { alert, alertText } = useSelector((state) => state.alertReducer);
  const alertDispatch = useDispatch(alertReducer);

  const timeOutFunction = async () => {
    setTimeout(() => {
      alertDispatch(alertMessage({ alert: false, alertText: '' }));
    }, 2000);
  };
  useEffect(() => {
    if (alert === true) {
      timeOutFunction();
    }
  }, [alert]);

  useEffect(() => {
    dispatch(getCartItems(userDetails.token));
  }, []);
  if (!userDetails.token) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <NavigationBarComponent className="navClass fixed-top" expand="md" />

      <CartHeader header="SHOPPING CART" />
      <AlertWrapper className="text-center " color="danger" isOpen={alert} data={alertText} />
      <CartItemListContainer />
      <Footer />
    </>
  );
};

export default CartContainer;
