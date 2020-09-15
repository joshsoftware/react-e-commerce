import React, { useEffect, useState } from 'react';
import ProductRowContainer from './ProductRowContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../actions/productListActions';
import ContainerWrapper from '../components/ContainerWrapper';
import AlertWrapper from '../components/AlertWrapper';

const ProductListContainer = () => {
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  let data = "No Items matches your choice";

  const toggle = () => setVisible(false);

  const dispatch = useDispatch();
  useEffect(() => {
    // const loadProducts = async () => {
    //   setLoading(true);
    dispatch(getProductList());
    //   setLoading(false);
    // };
    // loadProducts();
  }, []);
  const { productList, alert } = useSelector((state) => state.productListReducer);
  let arr = [];
  useEffect(() => {
    if(alert === true){
      setVisible(true);
    }
  }, [alert]);
  for (let i = 0; i < productList.length; i += 3) {
    arr.push(
      <ProductRowContainer key={productList[i].id} products={productList.slice(i, i + 3)} />
    );
  }
  arr.push(<AlertWrapper color="info" isOpen={visible} toggle={toggle} data={data}/>)
  
  return <ContainerWrapper data={arr} fluid={true} />;
};

export default ProductListContainer;
