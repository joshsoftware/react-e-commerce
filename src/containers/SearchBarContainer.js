import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import SearchBar from '../components/SearchBar';
import { searchRequest, setSearchproduct, searchFailed } from '../actions/formActions';
import { initialState } from '../reducers/searchbarReducer';
const SearchBarContainer = () => {
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.searbarReducer);
  console.log('hiii*********', searchState);
  const { searchproduct } = searchState;
  const onsearchchange = (event) => {
    dispatch(setSearchproduct(event.target.value));
  };
  const searchData = () => {
    console.log('in searchdata');
    dispatch(searchRequest(searchproduct));
  };
  return (
    <SearchBar
      searchData={searchData}
      dispatch={dispatch}
      formState={searchState}
      onsearchchange={onsearchchange}
    />
  );
};

export default SearchBarContainer;
