import { ALERT_ACTIONS } from '../shared/actionConstants';

export const alertMessage = (alertObj) => {
  return {
    type: ALERT_ACTIONS.ALERT_MESSAGE,
    value: alertObj
  };
};

export const alertLogin = (alertObj) => {
  console.log('in action', alertObj);
  return {
    type: ALERT_ACTIONS.ALERT_LOGIN,
    value: alertObj
  };
};
