import { PRODUCT_LIST_REDUCER } from '../shared/actionConstants';

export const setProductList = (product_list) => {
  return {
    type: PRODUCT_LIST_REDUCER.SET_PRODUCT_LIST,
    value: product_list
  };
};

export const getProductList = (page) => {
  return {
    type: PRODUCT_LIST_REDUCER.GET_PRODUCT_LIST,
    value: page
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

export const setFilters = (data) => {
  return {
    type: PRODUCT_LIST_REDUCER.SET_FILTERS,
    value: data
  };
};

export const deleteFilters = (data) => {
  return {
    type: PRODUCT_LIST_REDUCER.DELETE_FILTERS,
    value: data
  };
};

export const applyFilters = () => {
  return {
    type: PRODUCT_LIST_REDUCER.APPLY_FILTERS
  };
};

export const setAlert = (alert) => {
  return {
    type: PRODUCT_LIST_REDUCER.SET_ALERT,
    value: alert
  };
};

// export const setCopyProductList = (product_list) => {
//   return {
//     type: PRODUCT_LIST_REDUCER.SET_COPY_PRODUCT_LIST,
//     value: product_list
//   };
// };

// export const setSubProductList = (product_list) => {
//   return {
//     type: PRODUCT_LIST_REDUCER.SET_SUB_PRODUCT_LIST,
//     value: product_list
//   };
// };
