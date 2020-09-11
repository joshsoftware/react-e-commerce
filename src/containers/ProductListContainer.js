import React, { useEffect } from 'react';
import ProductRowContainer from './ProductRowContainer';
import ContainerComponent from '../components/ContainerWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../actions/productListActions';

const ProductListContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList());
  }, []);
  const { productList } = useSelector((state) => state.productListReducer);
  let arr = [];
  for (let i = 0; i < productList.length; i += 3) {
    arr.push(
      <ProductRowContainer key={productList[i].id} products={productList.slice(i, i + 3)} />
    );
  }
  return <ContainerComponent data={arr} fluid={true} />;
};

export default ProductListContainer;
