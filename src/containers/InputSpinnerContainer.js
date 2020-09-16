import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { updateItemQuantity } from '../actions/cartActions';
import { updateCartItemsApi } from '../apis/cartApi';
import { useSelector } from 'react-redux';
import { updateProductStockApi, getProductByIdApi } from '../apis/productApi';
import InputSpinnerWrapper from '../components/InputSpinnerWrapper';
import ButtonWrapper from '../components/ButtonWrapper';
import ColumnWrapper from '../components/ColumnWrapper';
import RowWrapper from '../components/RowWrapper';

const InputSpinnerContainer = ({ id, quantity, dispatch }) => {
  let [stock, setStock] = useState('');
  let [updated_quantity, setQuantity] = useState(quantity);
  let [valid_quantity, setValidQuantity] = useState(quantity);
  let [flag, setFlag] = useState(true);
  const increaseQuantity = () => {
    let new_quantity = parseInt(updated_quantity);
    if (new_quantity + 1 > stock) {
      alert('Stock Empty');
      return;
    }
    setQuantity(new_quantity + 1);
    setValidQuantity(new_quantity + 1);
  };
  const decreaseQuantity = () => {
    let new_quantity = parseInt(updated_quantity);
    if (new_quantity - 1 < 1) {
      alert('Atleast One Item Should Be There In The Cart!');
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
    }
  }, [flag]);
  const { userDetails } = useSelector((state) => state.loginReducer);
  let itemFunc = (item_quantity) => {
    updateProductStockApi({ id: id, stockChange: item_quantity - quantity });
    updateCartItemsApi({ token: userDetails.token, product_id: id, quantity: item_quantity });
    dispatch(updateItemQuantity({ id: id, newQuantity: item_quantity }));
  };

  function updateQuantity(e) {
    setQuantity(e.target.value);
    let input = e.target.value;
    let length = input.length;
    if (input === ' ') {
      alert('Invalid Input!');
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
      alert('Invalid Input');
      setQuantity(quantity);
      return;
    } else {
      if (input > stock) {
        alert('This Much Stock Not Available!');
        setQuantity(quantity);
        return;
      }
      if (input === '0') {
        alert('Atleast One Item Should Be There In The Cart!');
        setQuantity(quantity);
        return;
      }
      setQuantity(input);
      let new_quantity = parseInt(input);
      if (new_quantity > 0) {
        setValidQuantity(parseInt(input));
      }
    }
  }
  useEffect(() => {
    itemFunc(valid_quantity);
  }, [valid_quantity]);
  let row_data = [];
  row_data.push(
    <ColumnWrapper data={<ButtonWrapper onClick={decreaseQuantity} buttonText={'-'} />} />
  );
  row_data.push(
    <ColumnWrapper
      data={
        <InputSpinnerWrapper
          size={5}
          min={1}
          max={stock}
          spinner={'true'}
          value={updated_quantity}
          className={'input-spinner m-0 p-0'}
          step={1}
          onChange={(e) => {
            updateQuantity(e);
          }}
        />
      }
    />
  );
  row_data.push(
    <ColumnWrapper data={<ButtonWrapper onClick={increaseQuantity} buttonText={'+'} />} />
  );
  return <RowWrapper data={row_data} noGutters={true} />;
};

export default InputSpinnerContainer;

InputSpinnerContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
};
