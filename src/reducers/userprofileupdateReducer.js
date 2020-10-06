import { FORM_ACTIONS } from '../shared/actionConstants';

const initialState = {
  firstname: '',
  lastname: '',
  password: '',
  country: 'select country',
  state: 'select state',
  city: 'select city',
  address: '',
  imageUrl: '',
  firstnameError: null,
  lastnameError: null,
  passwordError: null,
  addressError: null,
  imageUrlError: null,
  isLoading: false,
  updated: false
};

const userprofileupdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_ACTIONS.RESET_ERRORS: {
      return {
        ...state,
        firstnameError: null,
        lastnameError: null,
        passwordError: null,
        addressError: null
      };
    }
    case FORM_ACTIONS.SET_FORM_STATE: {
      let newFormState = initialState,
        data = action.value;
      newFormState.firstname = data.first_name;
      newFormState.lastname = data.last_name;
      newFormState.address = data.address;
      if (data.city !== '') {
        newFormState.city = data.city;
      }
      if (data.country !== '') {
        newFormState.country = data.country;
      }
      if (data.state !== '') {
        newFormState.state = data.state;
      }
      newFormState.password = undefined;
      return newFormState;
    }
    case FORM_ACTIONS.RESET_STATE:
      return initialState;
    case FORM_ACTIONS.SET_FIRSTNAME:
      return { ...state, firstname: action.value };
    case FORM_ACTIONS.SET_LASTNAME:
      return { ...state, lastname: action.value };
    case FORM_ACTIONS.SET_PASSWORD:
      return { ...state, password: action.value };
    case FORM_ACTIONS.SET_COUNTRY:
      return { ...state, country: action.value };
    case FORM_ACTIONS.SET_STATE:
      return { ...state, state: action.value };
    case FORM_ACTIONS.SET_CITY:
      return { ...state, city: action.value };
    case FORM_ACTIONS.SET_ADDRESS:
      return { ...state, address: action.value };
    case FORM_ACTIONS.SET_IMAGE_URL:
      return { ...state, imageUrl: action.value };
    case FORM_ACTIONS.SET_ISLOADING:
      return { ...state, isLoading: action.value };
    case FORM_ACTIONS.SET_UPDATED:
      return { ...state, updated: action.value };
    case FORM_ACTIONS.UPDATE_REQUEST:
      return { ...state, isLoading: action.value };
    case FORM_ACTIONS.UPDATE_FAILED:
      return { ...state, isLoading: action.value };
    case FORM_ACTIONS.SET_FIRSTNAME_ERROR:
      return { ...state, firstnameError: action.value };
    case FORM_ACTIONS.SET_LASTNAME_ERROR:
      return { ...state, lastnameError: action.value };
    case FORM_ACTIONS.SET_PASSWORD_ERROR:
      return { ...state, passwordError: action.value };
    case FORM_ACTIONS.SET_ADDRESS_ERROR:
      return { ...state, addressError: action.value };
    case FORM_ACTIONS.SET_IMAGEURL_ERROR:
      return { ...state, imageUrlError: action.value };
    case FORM_ACTIONS.SET_FIELD: {
      return {
        ...state,
        [action.field]: action.value
      };
    }
    default:
      return state;
  }
};

export default userprofileupdateReducer;
export { initialState };
