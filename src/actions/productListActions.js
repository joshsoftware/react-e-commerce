import { PRODUCT_LIST_REDUCER } from '../shared/actionConstants';

export const setProductList = (product_list) => {
  return {
    type: PRODUCT_LIST_REDUCER.SET_PRODUCT_LIST,
    value: product_list
  };
};

export const getProductList = () => {
  console.log('getProductList function');
  return {
    type: PRODUCT_LIST_REDUCER.GET_PRODUCT_LIST
  };
};
