import { ALERT_ACTIONS } from '../shared/actionConstants';
const initialState = {
  alert: false,
  loginAlert: false,
  registrationAlert: false,
  userProfileAlert: false,
  alertText: '',
  loginAlertText: '',
  registrationAlertText: ''
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_ACTIONS.ALERT_MESSAGE: {
      console.log('alert reducer', action.value);
      return { ...state, alert: action.value.alert, alertText: action.value.alertText };
    }
    case ALERT_ACTIONS.ALERT_REGISTRATION: {
      return {
        ...state,
        registrationAlert: action.value.alert,
        registrationAlertText: action.value.alertText
      };
    }
    case ALERT_ACTIONS.ALERT_LOGIN: {
      console.log('in reducer', action.value);
      return { ...state, loginAlert: action.value.alert, loginAlertText: action.value.alertText };
    }
    case ALERT_ACTIONS.ALERT_USER_PROFILE:
      return { ...state, userProfileAlert: action.value.alert, alertText: action.value.alertText };
    default:
      return state;
  }
};

export default alertReducer;
