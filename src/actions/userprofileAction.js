import { USERPROFILE_REDUCER } from '../shared/actionConstants';

export const setUserProfile = (profile) => {
  return {
    type: USERPROFILE_REDUCER.SET_USER_PROFILE,
    value: profile
  };
};

export const getUserProfile = (token) => {
  return {
    type: USERPROFILE_REDUCER.GET_USER_PROFILE,
    value: token
  };
};
