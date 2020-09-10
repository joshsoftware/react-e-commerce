import { CART_REDUCER } from '../shared/actionConstants';
const initialState = {
  cartItemsList: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_REDUCER.SET_CARTITEMS:
      return { ...state, cartItemsList: action.value };
    case CART_REDUCER.DELETE_CART_ITEM: {
      let newCartItemsList = [...state.cartItemsList];
      let index = state.cartItemsList.findIndex((cartItem) => cartItem.id === action.value);
      newCartItemsList.splice(index, 1);
      return { ...state, cartItemsList: newCartItemsList };
    }
    case CART_REDUCER.UPDATE_ITEM_QUANTITY: {
      let newCartItemsList = [...state.cartItemsList];
      let index = state.cartItemsList.findIndex((cartItem) => cartItem.id === action.value.id);
      newCartItemsList[index].quantity = action.value.newQuantity;
      return { ...state, cartItemsList: newCartItemsList };
    }
    case CART_REDUCER.ADD_CART_ITEM: {
      let index = state.cartItemsList.findIndex((cartItem) => cartItem.id === action.value.id);
      if (index === -1) {
        console.log('product item', action.value);
        let newCartItemsList = [...state.cartItemsList, action.value];
        console.log('ADD cart item', newCartItemsList);
        return { ...state, cartItemsList: newCartItemsList };
      }
    }
    default:
      return state;
  }
};

export default cartReducer;
