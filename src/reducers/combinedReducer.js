import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import loginReducer from './LoginReducer';
import cartReducer from './cartReducer';
import footerElementListReducer from './footerReducer';
import productListReducer from './productListReducer';
import userprofileReducer from './userprofileReducer';
import userprofileupdateReducer from './userprofileupdateReducer';
import addProductReducer from './addProductReducer';
import updateProductReducer from './updateProductReducer';
import searbarReducer from './searchbarReducer';
import alertReducer from './alertReducer';
import userListReducer from './userListReducer';
import setPasswordReducer from './setPasswordReducer';

const combinedReducer = () => {
  return combineReducers({
    loginReducer,
    registrationReducer,
    cartReducer,
    searbarReducer,
    productListReducer,
    footerElementListReducer,
    userprofileReducer,
    userprofileupdateReducer,
    addProductReducer,
    updateProductReducer,
    alertReducer,
    userListReducer,
    setPasswordReducer
  });
};

export default combinedReducer;
