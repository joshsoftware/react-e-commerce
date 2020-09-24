import React, { useEffect, useState } from 'react';
import ProductRowContainer from './ProductRowContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList, resetProductList } from '../actions/productListActions';
import ContainerWrapper from '../components/ContainerWrapper';
import AlertWrapper from '../components/AlertWrapper';
import './productContainer.css';
import alertReducer from '../reducers/alertReducer';
import { alertLogin } from '../actions/alertActions';

const ProductListContainer = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [alertText, setAlertText] = useState('No items matches your choice!!');
  const { totalPages } = useSelector((state) => state.productListReducer);

  const { loginAlert, loginAlertText } = useSelector((state) => state.alertReducer);
  const dispatch = useDispatch();
  const alertDispatch = useDispatch(alertReducer);

  const timeOutFunction = async () => {
    setTimeout(() => {
      alertDispatch(alertLogin({ alert: false, alertText: '' }));
      setVisible(false);
    }, 2000);
  };
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    setLoading(true);
  };

  useEffect(() => {
    dispatch(resetProductList());
    setLoading(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setAlertText(loginAlertText);
    timeOutFunction();
  }, [loginAlert]);

  useEffect(() => {
    if (visible === true) {
      timeOutFunction();
    }
  }, [visible]);
  const changeStates = async () => {
    setTimeout(() => {
      setPage(page + 1);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    if (loading === true && (page <= totalPages || totalPages === 0)) {
      dispatch(getProductList(page));
      changeStates();
    }
  }, [loading]);

  const { productList, alert } = useSelector((state) => state.productListReducer);
  let arr = [];

  useEffect(() => {
    if (alert === true) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [alert]);

  let tempProductList = [];
  for (let i = 0; i < productList.length; i++) {
    if (productList[i].disabled === false) {
      tempProductList.push(productList[i]);
    }
  }
  for (let i = 0; i < tempProductList.length; i += 4) {
    if (tempProductList[i] !== undefined) {
      arr.push(
        <ProductRowContainer
          key={tempProductList[i].id}
          products={tempProductList.slice(i, i + 4)}
          setVisible={setVisible}
          setAlertText={setAlertText}
        />
      );
    }
  }
  arr.push(
    <AlertWrapper
      className="text-center fixed-top"
      color={visible && !alertText.includes('added') ? 'danger' : 'info'}
      isOpen={visible || loginAlert}
      data={alertText === '' ? 'No items matches your choice!!' : alertText}
    />
  );

  return <ContainerWrapper styleClass={'product-container'} data={arr} fluid={true} />;
};
export default ProductListContainer;
