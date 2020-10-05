import { FORM_ACTIONS, PRODUCT_ACTIONS } from '../shared/actionConstants';

const initialState = {
  productTitle: '',
  description: '',
  productPrice: null,
  discount: null,
  tax: null,
  stock: null,
  brand: '',
  categoryId: 0,
  category: 'select category',
  color: '',
  size: '',
  imageUrl: null,
  productTitleError: null,
  descriptionError: null,
  productPriceError: null,
  discountError: null,
  taxError: null,
  stockError: null,
  brandError: null,
  colorError: null,
  sizeError: null,
  imageUrlError: null,
  productUpdated: false
};

const updateProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_ACTIONS.RESET_ERRORS: {
      return {
        ...state,
        productTitleError: null,
        descriptionError: null,
        productPriceError: null,
        discountError: null,
        taxError: null,
        stockError: null,
        brandError: null,
        colorError: null,
        sizeError: null,
        imageUrlError: null
      };
    }
    case FORM_ACTIONS.SET_FORM_STATE: {
      let newFormState = initialState,
        data = action.value;
      newFormState.productTitle = data.product_title;
      newFormState.productPrice = data.product_price;
      newFormState.discount = data.discount;
      newFormState.tax = data.tax;
      newFormState.stock = data.stock;
      newFormState.description = data.description;
      newFormState.categoryId = data.category_id;
      newFormState.color = data.color;
      newFormState.size = data.size;
      newFormState.category = data.category;
      newFormState.brand = data.brand;
      newFormState.imageUrl = data.image_urls === 'undefined' ? null : data.image_urls[0];
      return newFormState;
    }
    case FORM_ACTIONS.RESET_STATE: {
      return initialState;
    }
    case FORM_ACTIONS.SET_FIELD: {
      return {
        ...state,
        [action.field]: action.value
      };
    }
    case PRODUCT_ACTIONS.SET_PRODUCTTITLE_ERROR:
      return { ...state, productTitleError: action.value };
    case PRODUCT_ACTIONS.SET_DESCRIPTION_ERROR:
      return { ...state, descriptionError: action.value };
    case PRODUCT_ACTIONS.SET_PRODUCTPRICE_ERROR:
      return { ...state, productPriceError: action.value };
    case PRODUCT_ACTIONS.SET_DISCOUNT_ERROR:
      return { ...state, discountError: action.value };
    case PRODUCT_ACTIONS.SET_TAX_ERROR:
      return { ...state, taxError: action.value };
    case PRODUCT_ACTIONS.SET_STOCK_ERROR:
      return { ...state, stockError: action.value };
    case PRODUCT_ACTIONS.SET_BRAND_ERROR:
      return { ...state, brandError: action.value };
    case PRODUCT_ACTIONS.SET_COLOR_ERROR:
      return { ...state, colorError: action.value };
    case PRODUCT_ACTIONS.SET_SIZE_ERROR:
      return { ...state, sizeError: action.value };
    case PRODUCT_ACTIONS.SET_IMAGEURL_ERROR:
      return { ...state, imageUrlError: action.value };
    case PRODUCT_ACTIONS.SET_PRODUCT_UPDATED:
      return { ...state, productUpdated: action.value };
    default:
      return state;
  }
};

export default updateProductReducer;
export { initialState };
