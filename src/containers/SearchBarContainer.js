import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { searchRequest, setSearchproduct } from '../actions/formActions';

const SearchBarContainer = () => {
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.searbarReducer);
  const { searchproduct } = searchState;
  const onsearchchange = (event) => {
    dispatch(setSearchproduct(event.target.value));
  };
  const searchData = () => {
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
