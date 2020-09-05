import React from 'react';
import productList from '../productList';
import ProductRowContainer from './ProductRowContainer';
import ContainerComponent from '../components/ContainerComponent';

const ProductListContainer = () => {
  let arr = [];
  console.log('array lenght is: ', productList.length);
  for (let i = 0; i < productList.length; i += 3) {
    arr.push(<ProductRowContainer products={productList.slice(i, i + 3)} />);
  }
  return <ContainerComponent arr={arr} />;
};

export default ProductListContainer;
