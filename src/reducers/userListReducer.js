import { USER_LIST_REDUCER } from '../shared/actionConstants';
const initialState = {
  userList: []
};
const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LIST_REDUCER.SET_USER_LIST: {
      let newUserList = action.value.data;
      return {
        ...state,
        userList: newUserList
      };
    }
    case USER_LIST_REDUCER.DELETE_USER: {
      let newUserList = state.userList;
      let index = newUserList.findIndex((user) => user.id === action.value);
      newUserList.splice(index, 1);
      return {
        ...state,
        userList: newUserList
      };
    }
    case USER_LIST_REDUCER.DISABLE_USER: {
      let newUserList = state.userList;
      let index = newUserList.findIndex((user) => user.id === action.value);
      newUserList[index].isDisabled = true;
      return {
        ...state,
        userList: newUserList
      };
    }
    case USER_LIST_REDUCER.ENABLE_USER: {
      let newUserList = state.userList;
      let index = newUserList.findIndex((user) => user.id === action.value);
      newUserList[index].isDisabled = false;
      return {
        ...state,
        userList: newUserList
      };
    }
    default:
      return state;
  }
};
export default userListReducer;
