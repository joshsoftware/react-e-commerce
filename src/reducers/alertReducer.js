import { ALERT_ACTIONS } from '../shared/actionConstants';
const initialState = {
  alert: false,
  loginAlert: false,
  userProfileAlert: false,
  alertText: ''
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_ACTIONS.ALERT_MESSAGE: {
      console.log('alert reducer', action.value);
      return { ...state, alert: action.value.alert, alertText: action.value.alertText };
    }
    case ALERT_ACTIONS.ALERT_LOGIN: {
      console.log('in reducer', action.value);
      return { ...state, loginAlert: action.value.alert, alertText: action.value.alertText };
    }
    case ALERT_ACTIONS.ALERT_USER_PROFILE:
      return { ...state, userProfileAlert: action.value.alert, alertText: action.value.alertText };
    default:
      return state;
  }
};

export default alertReducer;
