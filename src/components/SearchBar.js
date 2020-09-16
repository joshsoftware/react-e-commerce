import React from 'react';
import ButtonWrapper from './ButtonWrapper';
import FormInput from './FormInput';
import PropTypes from 'prop-types';
const SearchBar = ({ placeholder, setSearch, filterProduct }) => {
  const setSearchWrapper = (e) => {
    setSearch(e.target.value);
  };
  const filterProductWrapper = () => {
    //let arr = filterProduct();
  };
  return (
    <>
      <FormInput placeholder={placeholder} onChange={setSearchWrapper} />
      <ButtonWrapper buttonText={'Search'} onClick={filterProductWrapper} />
    </>
  );
};
export default SearchBar;
SearchBar.propTypes = {
  placeholder: PropTypes.string,
  setSearch: PropTypes.func,
  filterProduct: PropTypes.func
};
