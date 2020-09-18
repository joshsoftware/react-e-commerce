import React from 'react';
import ButtonWrapper from './ButtonWrapper';
import FormInput from './FormInput';
import PropTypes from 'prop-types';
const SearchBar = ({ searchData, onsearchchange }) => {
  // let a=formState.searchproduct.value();
  return (
    <>
      <FormInput placeholder={'search'} onChange={onsearchchange} />
      <ButtonWrapper buttonText={'Search'} onClick={searchData} />
    </>
  );
};
export default SearchBar;

SearchBar.propTypes = {
  searchData: PropTypes.string,
  onsearchchange: PropTypes.func
};
