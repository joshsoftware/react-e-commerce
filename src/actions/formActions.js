import { FORM_ACTIONS } from '../shared/actionConstants';
import logout from '../apis/logoutApi';

export const logoutRequest = (token, dispatch) => {
  dispatch(setUserDetails({}));
  return logout(token);
};

export const setFirstnameError = () => {
  return {
    type: FORM_ACTIONS.SET_FIRSTNAME_ERROR,
    value: null
  };
};

export const setLastnameError = () => {
  return {
    type: FORM_ACTIONS.SET_LASTNAME_ERROR,
    value: null
  };
};

export const setEmailError = () => {
  return {
    type: FORM_ACTIONS.SET_EMAIL_ERROR,
    value: null
  };
};

export const setPasswordError = () => {
  return {
    type: FORM_ACTIONS.SET_PASSWORD_ERROR,
    value: null
  };
};

export const setAddressError = () => {
  return {
    type: FORM_ACTIONS.SET_ADDRESS_ERROR,
    value: null
  };
};

export const resetErrors = () => {
  return {
    type: FORM_ACTIONS.RESET_ERRORS
  };
};

export const setErrors = (ele) => {
  return {
    type: `SET_${ele.path.toUpperCase()}_ERROR`,
    value: ele.message
  };
};

export const setFirstname = (val) => {
  return {
    type: FORM_ACTIONS.SET_FIRSTNAME,
    value: val.target.value
  };
};

export const setLastname = (val) => {
  return {
    type: FORM_ACTIONS.SET_LASTNAME,
    value: val.target.value
  };
};

export const setEmail = (val) => {
  return {
    type: FORM_ACTIONS.SET_EMAIL,
    value: val.target.value
  };
};

export const setIsLoading = (val) => {
  return {
    type: FORM_ACTIONS.SET_ISLOADING,
    value: val
  };
};

export const setPassword = (val) => {
  return {
    type: FORM_ACTIONS.SET_PASSWORD,
    value: val.target.value
  };
};

export const setCountry = (val) => {
  return {
    type: FORM_ACTIONS.SET_COUNTRY,
    value: val.target.value
  };
};

export const setState = (val) => {
  return {
    type: FORM_ACTIONS.SET_STATE,
    value: val.target.value
  };
};

export const setCity = (val) => {
  return {
    type: FORM_ACTIONS.SET_CITY,
    value: val.target.value
  };
};

export const setAddress = (val) => {
  return {
    type: FORM_ACTIONS.SET_ADDRESS,
    value: val.target.value
  };
};

export const setField = (field, value) => {
  return {
    type: FORM_ACTIONS.SET_FIELD,
    field: field,
    value: value
  };
};

export const registrationRequest = (data) => {
  return {
    type: FORM_ACTIONS.REGISTRATION_REQUEST,
    value: data
  };
};
export const updateFailed = (error) => {
  return {
    type: FORM_ACTIONS.UPDATE_FAILED,
    value: error
  };
};

export const updateRequest = (data) => {
  return {
    type: FORM_ACTIONS.UPDATE_REQUEST,
    value: data
  };
};

export const setUpdated = (data) => {
  return {
    type: FORM_ACTIONS.SET_UPDATED,
    value: data
  };
};

export const setRegistered = (data) => {
  return {
    type: FORM_ACTIONS.SET_REGISTERED,
    value: data
  };
};

export const registrationFailed = (error) => {
  return {
    type: FORM_ACTIONS.REGISTRATION_FAILED,
    value: error
  };
};

export const loginRequest = (data) => {
  return {
    type: FORM_ACTIONS.LOGIN_REQUEST,
    value: data
  };
};

export const setUserDetails = (data) => {
  return {
    type: FORM_ACTIONS.SET_USER_DETAILS,
    value: data
  };
};

export const loginFailed = (error) => {
  return {
    type: FORM_ACTIONS.LOGIN_FAILED,
    value: error
  };
};

export const loginOAuthRequest = (data) => {
  return {
    type: FORM_ACTIONS.LOGINOAUTH_REQUEST,
    value: data
  };
};

export const loginOAuthFailed = (error) => {
  return {
    type: FORM_ACTIONS.LOGINOAUTH_FAILED,
    value: error
  };
};

export const searchRequest = (data) => {
  return {
    type: FORM_ACTIONS.SEARCH_REQUEST,
    value: data
  };
};

export const searchFailed = (error) => {
  return {
    type: FORM_ACTIONS.SEARCH_FAILED,
    value: error
  };
};

export const setSearchproduct = (val) => {
  return {
    type: FORM_ACTIONS.SET_SEARCHPRODUCT,
    value: val
  };
};
