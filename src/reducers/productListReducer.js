import { PRODUCT_LIST_REDUCER } from '../shared/actionConstants';
const initialState = {
  productList: []
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REDUCER.GET_PRODUCT_LIST:
      return { ...state, productList: action.value };
    default:
      return state;
  }
};

export default productListReducer;
