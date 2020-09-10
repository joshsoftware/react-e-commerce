import React, { useState } from 'react';
import DropDownWrapper from '../components/DropDownWrapper';
import DropdownToggleWrapper from '../components/DropdownToggleWrapper';
import DropdownMenuWrapper from '../components/DropdownMenuWrapper';
import DropdownItemWrapper from '../components/DropdownItemWrapper';
import PropTypes from 'prop-types';
import { updateItemQuantity } from '../actions/cartActions';

const CartDropdownContainer = ({ id, quantity, stock, dispatch }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  let arr = [];
  let arr1 = [];
  let itemFunc = (item_quantity) => {
    dispatch(updateItemQuantity({ id: id, newQuantity: item_quantity }));
  };
  for (let i = 1; i <= stock; i++) {
    arr.push(<DropdownItemWrapper option={i} onClick={() => itemFunc(i)} />);
  }
  arr1.push(<DropdownToggleWrapper caret={true} data={quantity} />);
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
