import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { setField } from '../actions/formActions';
import DropdownItemWrapper from '../components/DropdownItemWrapper';
import DropdownToggleWrapper from '../components/DropdownToggleWrapper';
import DropdownMenuWrapper from '../components/DropdownMenuWrapper';
import DropDownWrapper from '../components/DropDownWrapper';

const CategoryDropdownContainer = ({ data, type, dispatch, state, disabled }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  let arr = [],
    i = 0;
  let arr1 = [];
  let itemFunc = (field_value) => {
    dispatch(setField(type, field_value));
    let cat_id;
    switch (field_value) {
      case 'Clothes': {
        cat_id = 1;
        break;
      }
      case 'Electronics': {
        cat_id = 2;
        break;
      }
      case 'Mobile': {
        cat_id = 3;
        break;
      }
      case 'Watch': {
        cat_id = 4;
        break;
      }
      case 'Books': {
        cat_id = 5;
        break;
      }
      case 'Sports': {
        cat_id = 6;
        break;
      }
    }
    dispatch(setField(`${type}Id`, cat_id));
  };
  arr = data.map((field_value) => {
    return (
      <DropdownItemWrapper key={i++} option={field_value} onClick={() => itemFunc(field_value)} />
    );
  });
  arr1.push(<DropdownToggleWrapper caret={true} data={state} />);
  arr1.push(<DropdownMenuWrapper data={arr} />);
  return <DropDownWrapper toggle={toggle} isOpen={dropdownOpen} data={arr1} disabled={disabled} />;
};

export default CategoryDropdownContainer;

CategoryDropdownContainer.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
