import React, { useEffect, useState } from 'react';
import ProductRowContainer from './ProductRowContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../actions/productListActions';
import ContainerWrapper from '../components/ContainerWrapper';
const ProductListContainer = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { totalPages } = useSelector((state) => state.productListReducer);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return;
    console.log(page);
    if (page + 1 <= totalPages || totalPages === 0) {
      setLoading(true);
    }
  };
  useEffect(() => {
    setLoading(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const dispatch = useDispatch();
  const changeStates = async () => {
    setTimeout(() => {
      setPage(page + 1);
      setLoading(false);
    }, 2000);
  };
  useEffect(() => {
    if (loading === true) {
      console.log('Page :', page);
      dispatch(getProductList(page));
      changeStates();
    }
  }, [loading]);
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