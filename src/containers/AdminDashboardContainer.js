import React, { useState, useEffect } from 'react';
import ButtonWrapper from '../components/ButtonWrapper';
import RowWrapper from '../components/RowWrapper';
import ColumnWrapper from '../components/ColumnWrapper';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AdminProductList from '../components/AdminProductList';
import ContainerWrapper from '../components/ContainerWrapper';
import { getProductList } from '../actions/productListActions';
import '../components/CartItem.css';

const AdminDashboardContainer = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const { totalPages } = useSelector((state) => state.productListReducer);
  const { userDetails } = useSelector((state) => state.loginReducer);

  useEffect(() => {
    if (loading === true && (page <= totalPages || totalPages === 0)) {
      dispatch(getProductList(page));
      changeStates();
    }
  }, [loading]);
  useEffect(() => {
    setLoading(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const changeStates = async () => {
    setTimeout(() => {
      setPage(page + 1);
      setLoading(false);
    }, 2000);
  };
  const { productList } = useSelector((state) => state.productListReducer);
  if (!userDetails.token) {
    return <Redirect to="/login" />;
  }

  let addButton = <ButtonWrapper className={'add_button'} buttonText={'Add Product'} />;

  let column_content = [];
  let row_content = [];
  let products = [];

  products = productList.map((product) => (
    <AdminProductList key={product.id} item={product} dispatch={dispatch} />
  ));

  column_content.push(<Link to="/admin/addproduct"> {addButton} </Link>);
  row_content.push(<ColumnWrapper />);
  row_content.push(<ColumnWrapper data={column_content} />);
  row_content.push(<ColumnWrapper />);

  return (
    <>
      <RowWrapper data={row_content} />
      <ContainerWrapper data={products} />
    </>
  );
};

export default AdminDashboardContainer;
