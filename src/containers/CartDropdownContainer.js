import React, { useState, useEffect } from 'react';
import DropDownWrapper from '../components/DropDownWrapper';
import DropdownToggleWrapper from '../components/DropdownToggleWrapper';
import DropdownMenuWrapper from '../components/DropdownMenuWrapper';
import DropdownItemWrapper from '../components/DropdownItemWrapper';
import PropTypes from 'prop-types';
import { updateItemQuantity } from '../actions/cartActions';
import { updateCartItemsApi } from '../apis/cartApi';
import { useSelector } from 'react-redux';
import { updateProductStockApi, getProductByIdApi } from '../apis/productApi';

const CartDropdownContainer = ({ id, quantity, dispatch }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let [stock, setStock] = useState('');
  let [flag, setFlag] = useState(false);
  const getProduct = async () => {
    console.log('in getProduct');
    const { data } = await getProductByIdApi(id);
    setStock(data.stock);
    setFlag(false);
    console.log('stock is', stock);
  };
  useEffect(() => {
    if (flag === true) {
      getProduct();
    }
  }, [flag]);
  const { userDetails } = useSelector((state) => state.loginReducer);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  let arr = [];
  let arr1 = [];
  let itemFunc = (item_quantity) => {
    updateProductStockApi({ id: id, stockChange: item_quantity - quantity });
    updateCartItemsApi({ token: userDetails.token, product_id: id, quantity: item_quantity });
    dispatch(updateItemQuantity({ id: id, newQuantity: item_quantity }));
  };
  for (let i = 1; i <= stock; i++) {
    arr.push(<DropdownItemWrapper option={i} onClick={() => itemFunc(i)} />);
  }
  arr1.push(
    <DropdownToggleWrapper
      onClick={() => {
        if (stock === '') {
          setFlag(true);
        }
      }}
      caret={true}
      data={quantity}
    />
  );
  arr1.push(<DropdownMenuWrapper data={arr} />);
  return <DropDownWrapper toggle={toggle} isOpen={dropdownOpen} data={arr1} />;
};

export default CartDropdownContainer;

CartDropdownContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired
};
