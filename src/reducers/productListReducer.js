import { PRODUCT_LIST_REDUCER } from '../shared/actionConstants';
const initialState = {
  productList: [],
  totalPages: 0,
  requiredProduct: {},
  filters: {},
  alert: false,
  min: 0,
  max: 0
};
const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REDUCER.SET_PRODUCT_LIST: {
      let newProductList = action.value.products;
      newProductList.forEach((element) => {
        element.disabled = false;
      });
      return {
        ...state,
        productList: [...state.productList, ...newProductList],
        totalPages: action.value.total_pages
      };
    }
    case PRODUCT_LIST_REDUCER.RESET_PRODUCT_LIST: {
      return initialState;
    }
    case PRODUCT_LIST_REDUCER.UPDATE_PRODUCT_LIST: {
      let newProductList = state.productList;
      let index = state.productList.findIndex((product) => product.id === action.value.id);
      newProductList[index].stock = action.value.stock;
      return { ...state, productList: newProductList };
    }
    case PRODUCT_LIST_REDUCER.SET_FILTERS:
      return { ...state, filters: action.value };
    case PRODUCT_LIST_REDUCER.SET_MIN_MAX:
      return { ...state, min: action.value.min, max: action.value.max };
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
        let min = state.min,
          max = state.max,
          offset = (max - min) / 3;
        switch (state.filters.price) {
          case `${min} - ${Math.floor(min + offset)}`: {
            if (product.product_price < min || product.product_price > Math.floor(min + offset)) {
              product.disabled = true;
            }
            break;
          }
          case `${Math.floor(min + offset + 1)} - ${Math.floor(min + offset * 2)}`: {
            if (
              product.product_price < Math.floor(min + offset) ||
              product.product_price > Math.floor(min + offset * 2)
            ) {
              product.disabled = true;
            }
            break;
          }
          case `${Math.floor(min + offset * 2 + 1)} - ${max}`: {
            if (
              product.product_price < Math.floor(min + offset * 2 + 1) ||
              product.product_price > max
            ) {
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
