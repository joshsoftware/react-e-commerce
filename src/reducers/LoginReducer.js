import { FORM_ACTIONS } from '../shared/actionConstants';
const initialState = {
  email: '',
  password: '',
  userDetails: {},
  emailError: null,
  passwordError: null,
  isLoading: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_ACTIONS.RESET_ERRORS:
      return { ...state, emailError: null, passwordError: null };
      case FORM_ACTIONS.RESET_STATE:
      return {...initialState, userDetails: state.userDetails};
    case FORM_ACTIONS.SET_EMAIL:
      return { ...state, email: action.value };
    case FORM_ACTIONS.SET_PASSWORD:
      return { ...state, password: action.value };
    case FORM_ACTIONS.SET_ISLOADING:
      return { ...state, isLoading: action.value };
    case FORM_ACTIONS.SET_EMAIL_ERROR:
      return { ...state, emailError: action.value };
    case FORM_ACTIONS.SET_USER_DETAILS:
      return { ...state, userDetails: action.value };
    case FORM_ACTIONS.SET_PASSWORD_ERROR:
      return { ...state, passwordError: action.value };
    default:
      return state;
  }
};

export default loginReducer;
export { initialState };
