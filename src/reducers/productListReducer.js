import { PRODUCT_LIST_REDUCER } from '../shared/actionConstants';
const initialState = {
  productList: [],
  totalPages: 0,
  requiredProduct: {},
  filters: {
    'category': [],
    'size': [],
    'color': [],
    'brand': [],
    'product_price': []
  },
  filteredProducts: [],
  alert: false,
  min: 0,
  max: 10000000,
  updateProductId: null
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
        filteredProducts: newProductList,
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
    
    
    case PRODUCT_LIST_REDUCER.SET_FILTERS: {
      let newFilters = state.filters, filterObj = action.value
      console.log("in set",filterObj, Object.keys(filterObj));
      
      newFilters[`${Object.keys(filterObj)[0]}`].push(filterObj[`${Object.keys(filterObj)[0]}`])
      return { ...state, filters: newFilters };
    }

    case PRODUCT_LIST_REDUCER.SET_FILTERED_PRODUCTS: {
      let newFilteredProducts = []
      state.productList.map((product) => {
        if(product.disabled === false) {
          newFilteredProducts.push(product);
        }
      })
      console.log('filtered',newFilteredProducts);
      
      return {...state, filteredProducts: newFilteredProducts}
    }

    case PRODUCT_LIST_REDUCER.DELETE_FILTERS: {
      let newFilters = state.filters, filterObj = action.value
      console.log("in delete",filterObj, Object.keys(filterObj));
      let index = newFilters[`${Object.keys(filterObj)[0]}`].indexOf(filterObj[`${Object.keys(filterObj)[0]}`]);
      newFilters[`${Object.keys(filterObj)[0]}`].splice(index, 1);
      return { ...state, filters: newFilters };
    }
    
    case PRODUCT_LIST_REDUCER.SET_MIN_MAX:{
      console.log("min, max in reducer", action.value.min, action.value.min)
      return { ...state, min: parseFloat(action.value.min), max: parseFloat(action.value.max) };
    }

    case PRODUCT_LIST_REDUCER.APPLY_FILTERS: {
      let newProductList = state.productList;
      newProductList.map((product) => {
        let flag = false;
        Object.keys(state.filters).map((key) => {
          if (state.filters[key].length > 0) {
            if (state.filters[key].includes(product[key]) === false) {
              flag = true   
              return;
            }
          }
        });
        if (flag === true) {
          product.disabled = true;
        } else {
          product.disabled = false;
        }
      });
      return { ...state, productList: newProductList };
    }

    case PRODUCT_LIST_REDUCER.APPLY_PRICE_FILTER: {
      let min = state.min, max = state.max, newProductList = state.productList;
        console.log("min, max", min, max)
        newProductList.map((product) => {
          if(product.product_price < min || product.product_price > max){
            product.disabled = true;
          }
        })
      return { ...state, productList: newProductList };
    }

    case PRODUCT_LIST_REDUCER.ADD_PRODUCT: {
      let newProductList = [...state.productList, ...action.value];
      return { ...state, productList: newProductList };
    }
    case PRODUCT_LIST_REDUCER.DELETE_PRODUCT: {
      console.log('product reducer', action.value);
      let newProductList = state.productList;
      let index = newProductList.findIndex((product) => product.id === action.value);
      newProductList.splice(index, 1);
      return {
        ...state,
        productList: newProductList
      };
    }
    case PRODUCT_LIST_REDUCER.UPDATE_PRODUCT: {
      let newProductList = state.productList;
      let index = newProductList.findIndex((product) => product.id === action.value.id);
      newProductList[index] = action.value;
      return {
        ...state,
        productList: newProductList
      };
    }
    case PRODUCT_LIST_REDUCER.SET_UPDATE_PRODUCT_ID: {
      return { ...state, updateProductId: action.value };
    }
    case PRODUCT_LIST_REDUCER.SET_ALERT:
      return { ...state, alert: action.value };

    default:
      return state;
  }
};
export default productListReducer;
