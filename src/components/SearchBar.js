import React from 'react';
import ButtonWrapper from './ButtonWrapper';
import FormInput from './FormInput';
import PropTypes from 'prop-types';
import RowWrapper from './RowWrapper';
import ColumnWrapper from './ColumnWrapper';
const SearchBar = ({ searchData, onsearchchange }) => {
  // let a=formState.searchproduct.value();
  return (
    <>
      <RowWrapper
        className="p-auto"
        data={
          <>
            <ColumnWrapper
              data={
                <FormInput
                  className="form-control mr-sm-2 col-xs-2"
                  type="search"
                  placeholder={'search'}
                  onChange={onsearchchange}
                  maxLength={50}
                />
              }
            />
            <ColumnWrapper
              className="col-*-2"
              data={<ButtonWrapper buttonText={'Search'} onClick={searchData} />}
            />
          </>
        }
      />
    </>
  );
};
export default SearchBar;

SearchBar.propTypes = {
  searchData: PropTypes.string,
  onsearchchange: PropTypes.func
};
