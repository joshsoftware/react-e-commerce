import React from 'react';
import productList from '../productList';
import ProductRowContainer from './ProductRowContainer';
import ContainerComponent from '../components/ContainerWrapper';
import { useDispatch, useSelector } from 'react-redux';

const ProductListContainer = () => {
  // const [state, dispatch] = useReducer(productListReducer);
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.productListReducer);
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
