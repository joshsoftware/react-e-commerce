import { USERPROFILE_REDUCER } from '../shared/actionConstants';
const initialState = {
  profile: {}
};

const userprofileReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERPROFILE_REDUCER.SET_USER_PROFILE: {
      return { ...state, profile: action.value };
    }
    default:
      return state;
  }
};

export default userprofileReducer;
