import { CART_REDUCER } from '../shared/actionConstants';
const initialState = {
  cartItemsList: [],
  totalPrice: 0,
  totalDiscount: 0,
  netTax: 0
};

const cartObject = (product) => {
  let newItem = {
    id: product.id,
    product_title: product.product_title,
    quantity: 1,
    category: product.category,
    description: product.description,
    image_url: product.image_url,
    product_price: product.product_price,
    discount: product.discount,
    tax: product.tax
  };
  return newItem;
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_REDUCER.SET_CART_ITEMS: {
      let newTotalPrice = 0,
        newTotalDiscount = 0,
        newNetTax = 0;
      action.value.map((product) => {
        newTotalPrice += product.product_price * product.quantity;
        newTotalDiscount += ((product.discount * product.product_price) / 100) * product.quantity;
        newNetTax += ((product.tax * product.product_price) / 100) * product.quantity;
      });
      return {
        ...state,
        cartItemsList: action.value,
        totalPrice: newTotalPrice,
        totalDiscount: newTotalDiscount,
        netTax: newNetTax
      };
    }
    case CART_REDUCER.GET_CART_ITEMS:
      return state;
    case CART_REDUCER.DELETE_CART_ITEM: {
      let newCartItemsList = [...state.cartItemsList];
      let index = state.cartItemsList.findIndex((cartItem) => cartItem.id === action.value);
      let newTotalPrice = state.totalPrice,
        newTotalDiscount = state.totalDiscount,
        newNetTax = state.netTax;
      newTotalPrice -= newCartItemsList[index].product_price * newCartItemsList[index].quantity;
      newTotalDiscount -=
        ((newCartItemsList[index].discount * newCartItemsList[index].product_price) / 100) *
        newCartItemsList[index].quantity;
      newNetTax -=
        ((newCartItemsList[index].tax * newCartItemsList[index].product_price) / 100) *
        newCartItemsList[index].quantity;
      newCartItemsList.splice(index, 1);
      return {
        ...state,
        cartItemsList: newCartItemsList,
        totalPrice: newTotalPrice,
        totalDiscount: newTotalDiscount,
        netTax: newNetTax
      };
    }
    case CART_REDUCER.UPDATE_ITEM_QUANTITY: {
      let newCartItemsList = [...state.cartItemsList];
      let index = state.cartItemsList.findIndex((cartItem) => cartItem.id === action.value.id);
      let newTotalPrice = state.totalPrice,
        newTotalDiscount = state.totalDiscount,
        newNetTax = state.netTax;
      if (action.value.flag === 'addToCart') {
        newTotalPrice += newCartItemsList[index].product_price;
        newTotalDiscount += newCartItemsList[index].discount;
        newNetTax += newCartItemsList[index].tax;
        newCartItemsList[index].quantity += 1;
      } else {
        newTotalPrice +=
          newCartItemsList[index].product_price *
          (action.value.newQuantity - newCartItemsList[index].quantity);
        newTotalDiscount +=
          ((newCartItemsList[index].discount * newCartItemsList[index].product_price) / 100) *
          (action.value.newQuantity - newCartItemsList[index].quantity);
        newNetTax +=
          ((newCartItemsList[index].tax * newCartItemsList[index].product_price) / 100) *
          (action.value.newQuantity - newCartItemsList[index].quantity);
        newCartItemsList[index].quantity = action.value.newQuantity;
      }
      return {
        ...state,
        cartItemsList: newCartItemsList,
        totalPrice: newTotalPrice,
        totalDiscount: newTotalDiscount,
        netTax: newNetTax
      };
    }
    case CART_REDUCER.ADD_CART_ITEM: {
      let newCartItemsList = [...state.cartItemsList, cartObject(action.value)];
      let newTotalPrice = state.totalPrice + action.value.product_price,
        newTotalDiscount =
          state.totalDiscount + (action.value.discount * action.value.product_price) / 100,
        newNetTax = state.netTax + (action.value.tax * action.value.product_price) / 100;
      return {
        ...state,
        cartItemsList: newCartItemsList,
        totalPrice: newTotalPrice,
        totalDiscount: newTotalDiscount,
        netTax: newNetTax
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
