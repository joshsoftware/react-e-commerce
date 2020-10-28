import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { searchRequest, setSearchproduct } from '../actions/formActions';
import { getProductList, resetProductList } from '../actions/productListActions';
import productListReducer from '../reducers/productListReducer';

const SearchBarContainer = () => {
  const dispatch = useDispatch();
  const productListDispatch = useDispatch(productListReducer);
  const searchState = useSelector((state) => state.searbarReducer);
  const { searchproduct } = searchState;
  const onsearchchange = (event) => {
    dispatch(setSearchproduct(event.target.value));
  };
  const searchData = () => {
    if (searchproduct === '') {
      productListDispatch(resetProductList());
      productListDispatch(getProductList(1));
    } else {
      dispatch(searchRequest(searchproduct));
    }
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
