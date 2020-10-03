import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { updateItemQuantity } from '../actions/cartActions';
import { updateCartItemsApi } from '../apis/cartApi';
// import { useSelector } from 'react-redux';
import { updateProductStockApi, getProductByIdApi } from '../apis/productApi';
import InputSpinnerWrapper from '../components/InputSpinnerWrapper';
import ButtonWrapper from '../components/ButtonWrapper';

const InputSpinnerContainer = ({ id, quantity, dispatch, setVisible, setAlertText }) => {
  let [stock, setStock] = useState('');
  let [updated_quantity, setQuantity] = useState(quantity);
  let [valid_quantity, setValidQuantity] = useState(quantity);
  let [flag, setFlag] = useState(true);

  const timeoutFunction = () => {
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  };

  const setAlert = (text) => {
    setVisible(true);
    setAlertText(text);
    timeoutFunction();
  };
  const increaseQuantity = () => {
    let new_quantity = parseInt(updated_quantity);
    if (new_quantity + 1 > stock) {
      setAlert('Stock Empty');
      return;
    }
    setQuantity(new_quantity + 1);
    setValidQuantity(new_quantity + 1);
  };
  const decreaseQuantity = () => {
    let new_quantity = parseInt(updated_quantity);
    if (new_quantity - 1 < 1) {
      setAlert('Minimum one item!');
      return;
    }
    setQuantity(new_quantity - 1);
    setValidQuantity(new_quantity - 1);
  };
  const getProduct = async () => {
    const { data } = await getProductByIdApi(id);
    setStock(data.stock);
    setFlag(false);
  };
  useEffect(() => {
    if (flag === true) {
      getProduct();
      return () => {
        getProduct();
      };
    }
  }, [flag]);
  // const { userDetails } = useSelector((state) => state.loginReducer);
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  let itemFunc = (item_quantity) => {
    updateProductStockApi({ id: id, stockChange: item_quantity - quantity });
    updateCartItemsApi({ token: userDetails.token, product_id: id, quantity: item_quantity });
    dispatch(updateItemQuantity({ id: id, newQuantity: item_quantity }));
  };
  const resetState = () => {
    setTimeout(() => {
      setQuantity(valid_quantity);
    }, 500);
  };
  function updateQuantity(e) {
    setQuantity(e.target.value);
    let input = e.target.value;
    let length = input.length;
    if (input === ' ') {
      setAlert('Invalid Input!');
      setQuantity(quantity);
      return;
    }
    let check_flag = true;
    for (let i = 0; i < length; i++) {
      if (input[i] < '0' || input[i] > '9') {
        check_flag = false;
        break;
      }
    }
    if (check_flag === false) {
      setAlert('Invalid Input');
      setQuantity(quantity);
      return;
    } else {
      if (input > stock) {
        setAlert('This Much Stock Not Available!');
        setQuantity(quantity);
        return;
      }
      if (input === '0') {
        setAlert('Atleast One Item Should Be There In The Cart!');
        setQuantity(quantity);
        return;
      }
      setQuantity(input);
      let new_quantity = parseInt(input);
      if (new_quantity > 0) {
        setQuantity(parseInt(input));
        setValidQuantity(parseInt(input));
      }
    }
    window.addEventListener('click', resetState);
  }
  useEffect(() => {
    itemFunc(valid_quantity);
  }, [valid_quantity]);
  let row_data = [];
  row_data.push(
    <ButtonWrapper
      style={'border-0 d-inline-block btn-sm'}
      outline={true}
      onClick={decreaseQuantity}
      buttonText={'-'}
    />
  );
  row_data.push(
    <InputSpinnerWrapper
      defaultValue={valid_quantity}
      size={1}
      min={1}
      max={stock}
      spinner={'true'}
      value={updated_quantity}
      className={'input-spinner d-inline-block m-0 p-0 border-0 text-center'}
      step={1}
      onChange={(e) => {
        updateQuantity(e);
      }}
    />
  );
  row_data.push(
    <ButtonWrapper
      style={'border-0 d-inline-block btn-sm'}
      outline={true}
      onClick={increaseQuantity}
      buttonText={'+'}
    />
  );
  return <div className={'d-inline-block'}>{row_data}</div>;
};

export default InputSpinnerContainer;

InputSpinnerContainer.propTypes = {
  setVisible: PropTypes.func,
  setAlertText: PropTypes.func,
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
};
