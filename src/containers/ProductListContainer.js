import React, { useEffect, useState } from 'react';
import ProductRowContainer from './ProductRowContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../actions/productListActions';
import ContainerWrapper from '../components/ContainerWrapper';

const ProductListContainer = () => {
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    // const loadProducts = async () => {
    //   setLoading(true);
    dispatch(getProductList());
    //   setLoading(false);
    // };
    // loadProducts();
  }, []);
  const { productList } = useSelector((state) => state.productListReducer);
  let arr = [];
  for (let i = 0; i < productList.length; i += 3) {
    arr.push(
      <ProductRowContainer key={productList[i].id} products={productList.slice(i, i + 3)} />
    );
  }
  return <ContainerWrapper data={arr} fluid={true} />;
};

export default ProductListContainer;
