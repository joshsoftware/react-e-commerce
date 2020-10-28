import { CART_REDUCER } from '../shared/actionConstants';

export const setCartItems = (cartItems) => {
  return {
    type: CART_REDUCER.SET_CART_ITEMS,
    value: cartItems
  };
};

export const getCartItems = (token) => {
  return {
    type: CART_REDUCER.GET_CART_ITEMS,
    value: token
  };
};

export const deleteCartItem = (data) => {
  return {
    type: CART_REDUCER.DELETE_CART_ITEM,
    value: data
  };
};

export const updateItemQuantity = (data) => {
  return {
    type: CART_REDUCER.UPDATE_ITEM_QUANTITY,
    value: data
  };
};

export const addCartItem = (data) => {
  return {
    type: CART_REDUCER.ADD_CART_ITEM,
    value: data
  };
};
