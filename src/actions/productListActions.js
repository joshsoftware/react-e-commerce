import { PRODUCT_LIST_REDUCER } from '../shared/actionConstants';

export const setProductList = (product_list) => {
  return {
    type: PRODUCT_LIST_REDUCER.SET_PRODUCT_LIST,
    value: product_list
  };
};

export const getProductList = () => {
  return {
    type: PRODUCT_LIST_REDUCER.GET_PRODUCT_LIST
  };
};

export const getProduct = (id) => {
  return {
    type: PRODUCT_LIST_REDUCER.GET_PRODUCT,
    value: id
  };
};

export const updateProductList = (data) => {
  return {
    type: PRODUCT_LIST_REDUCER.UPDATE_PRODUCT_LIST,
    value: data
  };
};
