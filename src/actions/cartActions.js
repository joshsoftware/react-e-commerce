import { CART_REDUCER } from '../shared/actionConstants';

export const setCartItems = (data) => {
  return {
    type: CART_REDUCER.SET_CARTITEMS,
    value: data
  };
};

export const deleteCartItem = (item_id) => {
  return {
    type: CART_REDUCER.DELETE_CART_ITEM,
    value: item_id
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
