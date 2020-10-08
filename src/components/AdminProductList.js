import React from 'react';
import './CartItem.css';
import ColumnWrapper from './ColumnWrapper';
import RowWrapper from './RowWrapper';
import CardImgWrapper from './CardImgWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import ButtonWrapper from './ButtonWrapper';
import CardTextWrapper from './CardTextWrapper';
import { deleteProduct } from '../actions/productListActions';
import { setUpdateProductId } from '../actions/productListActions';
import { deleteProductApi } from '../apis/productApi';
import { useDispatch } from 'react-redux';
import { Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { alertMessage } from '../actions/alertActions';
import alertReducer from '../reducers/alertReducer';
import { resetState, setFormState } from '../actions/formActions';
import updateProductReducer from '../reducers/updateProductReducer';
import ModalWrapper from './ModalWrapper';

const AdminProductList = ({ item, dispatch }) => {
  let { product_title, image_urls, product_price, id } = item;
  const alertDispatch = useDispatch(alertReducer);
  const updateProductDispatch = useDispatch(updateProductReducer);
  // const { userDetails } = useSelector((state) => state.loginReducer);
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  let column_content = [];
  let i = 0;
  let updateButton = (
    <ButtonWrapper
      onClick={() => {
        updateProductDispatch(resetState());
        dispatch(setUpdateProductId(id));
        updateProductDispatch(setFormState(item));
      }}
      buttonText={'Update Product'}
    />
  );
  const onClickWrapper = () => {
    deleteProductApi({ token: userDetails.token, product_id: id })
      .then(() => {
        dispatch(deleteProduct(id));
        alertDispatch(alertMessage({ alert: true, alertText: 'Product deleted Successfully' }));
      })
      .catch((err) => {
        if (err == 'Error: Request failed with status code 404') {
          alertDispatch(alertMessage({ alert: true, alertText: 'Bad Request' }));
        } else if (err == 'Error: Request failed with status code 401') {
          alertDispatch(alertMessage({ alert: true, alertText: 'Unauthorised' }));
        } else {
          alertDispatch(alertMessage({ alert: true, alertText: 'Internal Server Error' }));
        }
      });
  };
  let item_details = [];
  let item_price_details_key = [];
  item_price_details_key.push(
    <CardTextWrapper className={'font-weight-bold'} key={i++} text={'Price:  $ ' + product_price} />
  );
  item_details.push(
    <Alert className={' p-0 '} color="info">
      {' '}
      {product_title}{' '}
    </Alert>
  );
  column_content.push(
    <ColumnWrapper
      key={i++}
      className={'col_one'}
      md={2}
      xs={2}
      sm={2}
      lg={2}
      xl={2}
      data={
        <CardImgWrapper
          src={`${process.env.REACT_APP_SERVER_URL}${
            image_urls !== null ? image_urls[0] : 'no_image'
          }`}
          className="img_fluid img_style"
        />
      }
    />
  );

  column_content.push(<ColumnWrapper key={i++} className={'col_two'} data={item_details} />);
  column_content.push(
    <ColumnWrapper key={i++} className={'col_two'} data={item_price_details_key} />
  );
  column_content.push(
    <ColumnWrapper
      key={i++}
      className={'col_five'}
      data={
        <ModalWrapper
          buttonText={'Delete'}
          color={'danger'}
          onClickWrapper={onClickWrapper}
          modalTitle={'Do you really want to remove this product?'}
        />
      }
    />
  );
  column_content.push(
    <ColumnWrapper
      key={i++}
      className={'col_five'}
      data={<Link to="/admin/updateproduct"> {updateButton} </Link>}
    />
  );

  return (
    <>
      <RowWrapper className={'row_style'} data={column_content} />
    </>
  );
};

export default AdminProductList;

AdminProductList.propTypes = {
  item: PropTypes.shape({
    discount: PropTypes.number,
    tax: PropTypes.number,
    image_urls: PropTypes.array,
    product_title: PropTypes.string,
    product_price: PropTypes.number,
    quantity: PropTypes.number,
    id: PropTypes.number
  }),
  dispatch: PropTypes.func.isRequired
};
