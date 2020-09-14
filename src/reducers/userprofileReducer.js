import { USERPROFILE_REDUCER } from '../shared/actionConstants';
const initialState = {
  profile: {}
};

const userprofileReducer = (state = initialState, action) => {
  console.log('pune' + action);
  switch (action.type) {
    case USERPROFILE_REDUCER.SET_USER_PROFILE: {
      console.log('bavdhan');
      return { ...state, profile: action.value };
    }
    // case USERPROFILE_REDUCER.GET_USER_PROFILE:
    //   console.log("software")
    //   return state;
    default:
      return state;
  }
};

export default userprofileReducer;
