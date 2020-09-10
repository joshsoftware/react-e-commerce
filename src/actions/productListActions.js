import { PRODUCT_LIST_REDUCER } from '../shared/actionConstants';

export const setProductListItems = (product_list) => {
  return {
    type: PRODUCT_LIST_REDUCER.GET_PRODUCT_LIST,
    value: product_list
  };
};
