import { FOOTER_ELEMENT_LIST_REDUCER } from '../shared/actionConstants';
const initialState = {
  elementList: [{categories:[]},{partners:[]},{contactus:[]}]
};

const footerElementListReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FOOTER_ELEMENT_LIST_REDUCER.SET_FOOTER_ELEMENT_LIST:
      const newState = { ...state };
     
      // return newState.map(product => {    
      //     return {...product}
      // });
      return { elementList:action.value};
      
    case FOOTER_ELEMENT_LIST_REDUCER.GET_FOOTER_ELEMENT_LIST:
      return state;
    default:
      return state;
  }
};

export default footerElementListReducer;
