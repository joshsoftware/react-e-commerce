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
  alert: false,
  min: 0,
  max: 0,
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



    case PRODUCT_LIST_REDUCER.DELETE_FILTERS: {
      let newFilters = state.filters, filterObj = action.value
      console.log("in delete",filterObj, Object.keys(filterObj));
      let index = newFilters[`${Object.keys(filterObj)[0]}`].indexOf(filterObj[`${Object.keys(filterObj)[0]}`]);
      newFilters[`${Object.keys(filterObj)[0]}`].splice(index, 1);
      return { ...state, filters: newFilters };
    }
    
    case PRODUCT_LIST_REDUCER.SET_MIN_MAX:
      return { ...state, min: action.value.min, max: action.value.max };

    case PRODUCT_LIST_REDUCER.APPLY_FILTERS: {
      let newProductList = state.productList;
      newProductList.map((product) => {
        let flag = false;
        // Object.keys(state.filters).map((key) => {
        //   if (product[key] !== state.filters[key] && key !== 'price') {
        //     flag = true;
        //     return;
        //   }
        // });
        // Object.keys(state.filters).map((key) => {
        //   console.log("filters", key, product[key], state.filters[key].includes(product[key]));
        // })
        
        Object.keys(state.filters).map((key) => {
          if (state.filters[key].length > 0) {
            // console.log("-------->", state.filters[key], product[key]);
            if (state.filters[key].includes(product[key]) === false) {
              flag = true   // size s  color blue     filter l, m, s    blue, red, black 
              return;
            }
          }
        });
        if (flag === true) {
          product.disabled = true;
        } else {
          product.disabled = false;
        }
        // let min = state.min,
        //   max = state.max,
        //   offset = (max - min) / 3;
        // if(offset !==0 ) {
        //   switch (state.filters.price) {
        //     case `${min} - ${Math.floor(min + offset)}`: {
        //       if (product.product_price < min || product.product_price > Math.floor(min + offset)) {
        //         product.disabled = true;
        //       }
        //       break;
        //     }
        //     case `${Math.floor(min + offset + 1)} - ${Math.floor(min + offset * 2)}`: {
        //       if (
        //         product.product_price < Math.floor(min + offset) ||
        //         product.product_price > Math.floor(min + offset * 2)
        //       ) {
        //         product.disabled = true;
        //       }
        //       break;
        //     }
        //     case `${Math.floor(min + offset * 2 + 1)} - ${max}`: {
        //       if (
        //         product.product_price < Math.floor(min + offset * 2 + 1) ||
        //         product.product_price > max
        //       ) {
        //         product.disabled = true;
        //       }
        //       break;
        //     }
        //   }
        // }
        // else {
        //   if(product.product_price !== min) {
        //     product.disabled = true;
        //   }
        //   else {
        //     product.disabled = false;
        //   }
        // }
        // console.log("product", product, state.filters);
      });
      return { ...state, productList: newProductList };
    }

    case PRODUCT_LIST_REDUCER.ADD_PRODUCT: {
      let newProductList = [...state.productList, ...action.value];
      return { ...state, productList: newProductList };
    }
    case PRODUCT_LIST_REDUCER.DELETE_PRODUCT: {
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
      //console.log('Old', newProductList);
      let index = newProductList.findIndex((product) => product.id === action.value.id);
      newProductList[index] = action.value;
      //console.log('New',newProductList);
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
