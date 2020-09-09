import { FORM_ACTIONS } from '../shared/actionConstants';

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

export const setCountryError = () => {
  return {
    type: FORM_ACTIONS.SET_COUNTRY_ERROR,
    value: null
  };
};

export const setStateError = () => {
  return {
    type: FORM_ACTIONS.SET_STATE_ERROR,
    value: null
  };
};

export const setCityError = () => {
  return {
    type: FORM_ACTIONS.SET_CITY_ERROR,
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

// export const loginRequest = (data) => {
//   return {
//     type: FORM_ACTIONS.LOGIN_REQUEST,
//     value: data,
//   };
// };

// export const loginFailed = (error) => {
//   return {
//     type: FORM_ACTIONS.LOGIN_FAILED,
//     value: error,
//   };
// };
