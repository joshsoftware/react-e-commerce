import { FORM_ACTIONS } from '../shared/actionConstants';

const initialState = {
  password: '',
  confirmPassword: '',
  passwordError: null,
  confirmPasswordError: null
};

const setPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_ACTIONS.RESET_ERRORS: {
      return {
        ...state,
        passwordError: null,
        confirmPasswordError: null
      };
    }
    case FORM_ACTIONS.SET_PASSWORD_ERROR: {
      return {
        ...state,
        passwordError: action.value
      };
    }
    case FORM_ACTIONS.SET_CONFIRM_PASSWORD_ERROR: {
      return {
        ...state,
        confirmPasswordError: action.value
      };
    }
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
export default setPasswordReducer;
