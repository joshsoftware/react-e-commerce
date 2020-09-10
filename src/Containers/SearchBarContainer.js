import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import product from '../Product';
const SearchBarContainer = () => {
  const [search, setSearch] = useState('');

  const filterdata = () => {
    const filterProduct = product.filter((product) => {
      return product.category.toLowerCase().includes(search.toLowerCase());
    });

    return filterProduct;
  };
  return <SearchBar placeholder={'search'} filterProduct={filterdata} setSearch={setSearch} />;
};
export default SearchBarContainer;
