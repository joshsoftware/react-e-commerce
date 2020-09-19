import { ALERT_ACTIONS } from '../shared/actionConstants';

export const alertMessage = (alertObj) => {
  console.log('alert message');
  return {
    type: ALERT_ACTIONS.ALERT_MESSAGE,
    value: alertObj
  };
};

export const alertLogin = (alertObj) => {
  return {
    type: ALERT_ACTIONS.ALERT_LOGIN,
    value: alertObj
  };
};

export const alertUserProfile = (alertObj) => {
  return {
    type: ALERT_ACTIONS.ALERT_USER_PROFILE,
    value: alertObj
  };
};
