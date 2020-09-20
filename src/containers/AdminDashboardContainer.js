import React, { useState, useEffect } from 'react';
import ButtonWrapper from '../components/ButtonWrapper';
import RowWrapper from '../components/RowWrapper';
import ColumnWrapper from '../components/ColumnWrapper';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AdminProductList from '../components/AdminProductList';
import ContainerWrapper from '../components/ContainerWrapper';
import { getProductList } from '../actions/productListActions';
import addProductReducer from '../reducers/addProductReducer';
import updateProductReducer from '../reducers/updateProductReducer';
import { setProductAdded, setProductUpdated } from '../actions/formActions';
import './AdminDashboardContainer.css';
import alertReducer from '../reducers/alertReducer';
import { alertLogin, alertMessage } from '../actions/alertActions';
import AlertWrapper from '../components/AlertWrapper';
import { logoutRequest } from '../actions/formActions';

const AdminDashboardContainer = () => {
  const { alert, loginAlert, alertText, loginAlertText } = useSelector(
    (state) => state.alertReducer
  );
  const alertDispatch = useDispatch(alertReducer);
  const dispatch = useDispatch();
  const addProductDispatch = useDispatch(addProductReducer);
  const updateProductDispatch = useDispatch(updateProductReducer);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  addProductDispatch(setProductAdded(false));
  updateProductDispatch(setProductUpdated(false));
  const { totalPages } = useSelector((state) => state.productListReducer);
  const { userDetails } = useSelector((state) => state.loginReducer);

  const timeOutFunction = async () => {
    setTimeout(() => {
      alertDispatch(alertMessage({ alert: false, alertText: '' }));
      alertDispatch(alertLogin({ alert: false, alertText: '' }));
    }, 2000);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + Math.trunc(document.documentElement.scrollTop) <=
        document.documentElement.offsetHeight - 15 ||
      loading
    ) {
      return;
    }
    setLoading(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setLoading(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (alert === true) {
      timeOutFunction();
    }
  }, [alert]);

  useEffect(() => {
    if (loginAlert === true) {
      timeOutFunction();
    }
  }, [loginAlert]);

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

  const { productList } = useSelector((state) => state.productListReducer);
  if (!userDetails.token) {
    return <Redirect to="/login" />;
  }

  let addButton = <ButtonWrapper style={'dash_button'} buttonText={'Add Product'} />;

  let column_content = [];
  let row_content = [];
  let products = [];
  products.push(<RowWrapper data={row_content} />);
  products.push(
    productList.map((product) => (
      <AdminProductList key={product.id} item={product} dispatch={dispatch} />
    ))
  );
  let logout = (
    <ButtonWrapper
      style={'dash_button'}
      onClick={() => {
        logoutRequest(userDetails.token, dispatch);
      }}
      buttonText={'Logout'}
    />
  );

  column_content.push(<Link to="/admin/addproduct"> {addButton} </Link>);

  row_content.push(
    <ColumnWrapper
      data={
        <Link className={'bg-dark text-white float-left'} to="/login">
          {' '}
          {logout}{' '}
        </Link>
      }
    />
  );
  row_content.push(<ColumnWrapper className={'col_dash'} data={column_content} />);
  row_content.push(<ColumnWrapper />);

  return (
    <>
      <ContainerWrapper
        className={'fixed-top'}
        data={
          <AlertWrapper
            className="text-center"
            color={alertText === 'Product deleted Successfully' ? 'danger' : 'info'}
            isOpen={alert || loginAlert}
            data={alertText === '' ? loginAlertText : alertText}
          />
        }
      />
      <ContainerWrapper data={products} />
    </>
  );
};

export default AdminDashboardContainer;
