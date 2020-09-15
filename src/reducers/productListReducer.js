import { PRODUCT_LIST_REDUCER } from '../shared/actionConstants';
const initialState = {
  productList: [],
  requiredProduct: {},
  filters: {},
  alert: false
};
const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REDUCER.SET_PRODUCT_LIST:
      let newProductList = action.value;
      newProductList.forEach((element) => {
        element.disabled = false;
      });
      return { ...state, productList: newProductList };
    case PRODUCT_LIST_REDUCER.UPDATE_PRODUCT_LIST: {
      let newProductList = state.productList;
      let index = state.productList.findIndex((product) => product.id === action.value.id);
      newProductList[index].stock = action.value.stock;
      return { ...state, productList: newProductList };
    }
    case PRODUCT_LIST_REDUCER.SET_FILTERS:
      return { ...state, filters: action.value };
    case PRODUCT_LIST_REDUCER.APPLY_FILTERS: {
      let newProductList = state.productList;
      newProductList.map((product) => {
        let flag = false;
        Object.keys(state.filters).map((key) => {
          if (product[key] !== state.filters[key] && key !== 'price') {
            flag = true;
            return;
          }
        });
        if (flag === true) {
          product.disabled = true;
        } else {
          product.disabled = false;
        }
        switch (state.filters.price) {
          case 'Under 1000': {
            if (product.product_price >= 1000) {
              product.disabled = true;
            }
            break;
          }
          case '1000 - 5000': {
            if (product.product_price < 1000 || product.product_price > 5000) {
              product.disabled = true;
            }
            break;
          }
          case '5000 - 10,000': {
            if (product.product_price < 5000 || product.product_price > 10000) {
              product.disabled = true;
            }
            break;
          }
          case '10,000 - 20,000': {
            if (product.product_price < 10000 || product.product_price > 20000) {
              product.disabled = true;
            }
            break;
          }
          case 'Over 20,000': {
            if (product.product_price <= 20000) {
              product.disabled = true;
            }
            break;
          }
        }
      });
      return { ...state, productList: newProductList };
    }
    case PRODUCT_LIST_REDUCER.SET_ALERT:
      return { ...state, alert: action.value };
    default:
      return state;
  }
};
export default productListReducer;
