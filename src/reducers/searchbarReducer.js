import { FORM_ACTIONS } from '../shared/actionConstants';

const initialState = {
  searchproduct: ''
};

const searchbarReducer = (state = initialState, action) => {
  console.log('**', action);
  switch (action.type) {
    case FORM_ACTIONS.SET_SEARCHPRODUCT:
      return { ...state, searchproduct: action.value };

    case FORM_ACTIONS.SEARCH_REQUEST:
      return { ...state, searchproduct: action.value };

    default:
      return state;
  }
};

export default searchbarReducer;
export { initialState };
