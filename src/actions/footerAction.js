import { FOOTER_ELEMENT_LIST_REDUCER } from '../shared/actionConstants';

export const setFooterElementList = (Element_List) => {
  return {
    type: FOOTER_ELEMENT_LIST_REDUCER.SET_FOOTER_ELEMENT_LIST,
    value: Element_List
  };
};

export const getFooterElementList = () => {
  console.log('getFooterElementList function');
  return {
    type: FOOTER_ELEMENT_LIST_REDUCER.GET_FOOTER_ELEMENT_LIST
  };
};
