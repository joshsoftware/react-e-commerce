import { FORM_ACTIONS } from '../shared/actionConstants';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  country: '',
  state: '',
  city: '',
  address: '',
  firstnameError: null,
  lastnameError: null,
  emailError: null,
  passwordError: null,
  countryError: null,
  stateError: null,
  cityError: null,
  addressError: null
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_ACTIONS.RESET_ERRORS: {
      return {
        ...state,
        firstnameError: null,
        lastnameError: null,
        emailError: null,
        passwordError: null,
        // countryError: null,
        // stateError: null,
        // cityError: null,
        addressError: null
      };
    }
    case FORM_ACTIONS.SET_FIRSTNAME:
      return { ...state, firstname: action.value };
    case FORM_ACTIONS.SET_LASTNAME:
      return { ...state, lastname: action.value };
    case FORM_ACTIONS.SET_EMAIL:
      return { ...state, email: action.value };
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
    case FORM_ACTIONS.SET_FIRSTNAME_ERROR:
      return { ...state, firstnameError: action.value };
    case FORM_ACTIONS.SET_LASTNAME_ERROR:
      return { ...state, lastnameError: action.value };
    case FORM_ACTIONS.SET_EMAIL_ERROR:
      return { ...state, emailError: action.value };
    case FORM_ACTIONS.SET_PASSWORD_ERROR:
      return { ...state, passwordError: action.value };
    case FORM_ACTIONS.SET_ADDRESS_ERROR:
      return { ...state, addressError: action.value };
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

export default registrationReducer;
export { initialState };
