import { CART_REDUCER } from '../shared/actionConstants';
const initialState = {
  cartItemsList: [],
  totalPrice: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_REDUCER.SET_CART_ITEMS:
      return { ...state, cartItemsList: action.value };
    case CART_REDUCER.GET_CART_ITEMS:
      return state;
    case CART_REDUCER.DELETE_CART_ITEM: {
      let newCartItemsList = [...state.cartItemsList];
      let index = state.cartItemsList.findIndex((cartItem) => cartItem.id === action.value);
      let newTotalPrice = state.totalPrice;
      newTotalPrice -= newCartItemsList[index].product_price * newCartItemsList[index].quantity;
      newCartItemsList.splice(index, 1);
      return { ...state, cartItemsList: newCartItemsList, totalPrice: newTotalPrice };
    }
    case CART_REDUCER.UPDATE_ITEM_QUANTITY: {
      let newCartItemsList = [...state.cartItemsList];
      let index = state.cartItemsList.findIndex((cartItem) => cartItem.id === action.value.id);
      let newTotalPrice = state.totalPrice;
      newTotalPrice +=
        newCartItemsList[index].product_price *
        (action.value.newQuantity - newCartItemsList[index].quantity);
      newCartItemsList[index].quantity = action.value.newQuantity;
      return { ...state, cartItemsList: newCartItemsList, totalPrice: newTotalPrice };
    }
    case CART_REDUCER.ADD_CART_ITEM: {
      let newCartItemsList = [...state.cartItemsList, action.value];
      let newTotalPrice = state.totalPrice;
      newTotalPrice += action.value.product_price;
      return { ...state, cartItemsList: newCartItemsList, totalPrice: newTotalPrice };
    }
    default:
      return state;
  };
};

export default cartReducer;
