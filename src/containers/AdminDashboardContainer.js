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

const AdminDashboardContainer = () => {
  const [visible, setVisible] = useState();
  const dispatch = useDispatch();
  const addProductDispatch = useDispatch(addProductReducer);
  const updateProductDispatch = useDispatch(updateProductReducer);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  addProductDispatch(setProductAdded(false));
  updateProductDispatch(setProductUpdated(false));
  const { totalPages } = useSelector((state) => state.productListReducer);
  const { userDetails } = useSelector((state) => state.loginReducer);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop - 12 !==
        document.documentElement.offsetHeight ||
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

  products = productList.map((product) => (
    <AdminProductList key={product.id} item={product} dispatch={dispatch} />
  ));

  column_content.push(<Link to="/admin/addproduct"> {addButton} </Link>);
  row_content.push(<ColumnWrapper />);
  row_content.push(<ColumnWrapper className={'col_dash'} data={column_content} />);
  row_content.push(<ColumnWrapper />);

  return (
    <>
      <RowWrapper data={row_content} />
      <ContainerWrapper data={products} />
    </>
  );
};

export default AdminDashboardContainer;
