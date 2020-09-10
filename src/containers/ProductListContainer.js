import React, { useReducer } from 'react';
import productList from '../productList';
import ProductRowContainer from './ProductRowContainer';
import ContainerComponent from '../components/ContainerWrapper';
import productListReducer from '../reducers/productListReducer';

const ProductListContainer = () => {
  const [state, dispatch] = useReducer(productListReducer);
  let arr = [];
  console.log('array lenght is: ', productList.length);
  for (let i = 0; i < productList.length; i += 3) {
    arr.push(
      <ProductRowContainer key={productList[i].id} products={productList.slice(i, i + 3)} />
    );
  }
  return <ContainerComponent data={arr} fluid={true} />;
};

export default ProductListContainer;
