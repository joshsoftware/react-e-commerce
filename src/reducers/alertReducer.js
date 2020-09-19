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
      return { ...state, loginAlert: action.value.alert, loginAlertText: action.value.alertText };
    }
    case ALERT_ACTIONS.ALERT_USER_PROFILE:
      //console.log('in reducer', action.value);
      return { ...state, userProfileAlert: action.value, alertText: action.value.alertText };
    default:
      return state;
  }
};

export default alertReducer;
