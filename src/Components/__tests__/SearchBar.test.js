import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar ', () => {
  it('Must return entire SearchBar', () => {
    const placeholder = '';
    const setSearch = () => {};
    const filterProduct = () => {};

    const { asFragment } = render(
      <SearchBar placeholder={placeholder} setSearch={setSearch} filterProduct={filterProduct} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
