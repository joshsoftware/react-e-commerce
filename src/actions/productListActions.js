import { PRODUCT_LIST_REDUCER } from '../shared/actionConstants';

export const setProductList = (product_list) => {
  return {
    type: PRODUCT_LIST_REDUCER.SET_PRODUCT_LIST,
    value: product_list
  };
};

export const setFilteredProducts = () => {
  return {
    type: PRODUCT_LIST_REDUCER.SET_FILTERED_PRODUCTS
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
export const resetProductList = () => {
  return {
    type: PRODUCT_LIST_REDUCER.RESET_PRODUCT_LIST
  };
};

export const setMinMax = (min, max) => {
  return {
    type: PRODUCT_LIST_REDUCER.SET_MIN_MAX,
    value: {
      min: min,
      max: max
    }
  };
};

export const deleteProductApi = (product_id) => {
  return {
    type: PRODUCT_LIST_REDUCER.DELETE_PRODUCT,
    value: product_id
  };
};
export const addProduct = (product) => {
  return {
    type: PRODUCT_LIST_REDUCER.ADD_PRODUCT,
    value: product
  };
};
export const setUpdateProductId = (product_id) => {
  return {
    type: PRODUCT_LIST_REDUCER.SET_UPDATE_PRODUCT_ID,
    value: product_id
  };
};
export const updateProduct = (product) => {
  return {
    type: PRODUCT_LIST_REDUCER.UPDATE_PRODUCT,
    value: product
  };
};

export const deleteProduct = (product_id) => {
  return {
    type: PRODUCT_LIST_REDUCER.DELETE_PRODUCT,
    value: product_id
  };
};

export const applyPriceFilter = () => {
  return {
    type: PRODUCT_LIST_REDUCER.APPLY_PRICE_FILTER
  };
};
