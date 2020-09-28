import { USER_LIST_REDUCER } from '../shared/actionConstants';

export const setUserList = (user_list) => {
  return {
    type: USER_LIST_REDUCER.SET_USER_LIST,
    value: user_list
  };
};

export const getUserList = (token) => {
  return {
    type: USER_LIST_REDUCER.GET_USER_LIST,
    value: token
  };
};

export const deleteUser = (user_id) => {
  return {
    type: USER_LIST_REDUCER.DELETE_USER,
    value: user_id
  };
};

export const enableUser = (user_id) => {
  return {
    type: USER_LIST_REDUCER.ENABLE_USER,
    value: user_id
  };
};
export const disableUser = (user_id) => {
  return {
    type: USER_LIST_REDUCER.DISABLE_USER,
    value: user_id
  };
};
