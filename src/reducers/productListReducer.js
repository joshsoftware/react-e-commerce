import { PRODUCT_LIST_REDUCER } from '../shared/actionConstants';
const initialState = {
  productList: [],
  requiredProduct: {}
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REDUCER.SET_PRODUCT_LIST:
      return { ...state, productList: action.value };
    case PRODUCT_LIST_REDUCER.UPDATE_PRODUCT_LIST: {
      let newProductList = state.productList;
      let index = state.productList.findIndex((product) => product.id === action.value.id);
      newProductList[index].stock = action.value.stock;
      return { ...state, productList: newProductList };
    }
    default:
      return state;
  }
};

export default productListReducer;
