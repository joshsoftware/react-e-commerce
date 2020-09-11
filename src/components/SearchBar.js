import React from 'react';
import ButtonWrapper from './ButtonWrapper';
import FormInput from './FormInput';
import PropTypes from 'prop-types';
import RowWrapper from './RowWrapper';
import ColumnWrapper from './ColumnWrapper';
const SearchBar = ({ placeholder, setSearch, filterProduct }) => {
  const setSearchWrapper = (e) => {
    setSearch(e.target.value);
  };
  const filterProductWrapper = () => {
    let arr = filterProduct();
    console.log(arr);
  };
  return (
    <>
      {/* <RowWrapper>
           <ColumnWrapper sm={2}>   */}
      <FormInput placeholder={placeholder} onChange={setSearchWrapper} />
      <ButtonWrapper buttonText={'Search'} onClick={filterProductWrapper} />
      {/* </ColumnWrapper>
      </RowWrapper> */}
    </>
  );
};
export default SearchBar;
SearchBar.propTypes = {
  placeholder: PropTypes.string,
  setSearch: PropTypes.func,
  filterProduct: PropTypes.func
};
