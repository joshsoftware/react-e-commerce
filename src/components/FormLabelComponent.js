import React, { useState } from 'react';
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import { useDispatch, useSelector } from 'react-redux';
import Data from './Data';
import { setFilters, applyFilters, setAlert } from '../actions/productListActions';

const FormLabel = ({ field, labelText, mainLabel, setLabel, setProducts, products }) => {
  const dispatch = useDispatch();
  const { productList, filters } = useSelector((state) => state.productListReducer);

  const [checked, setChecked] = useState(false);
  const filterFunction = (labelText) => {
    dispatch(setAlert(false));
    setChecked(!checked);
    let selectedFilters = filters;
    if (!checked) {
      selectedFilters[`${mainLabel}`] = labelText;
      dispatch(setFilters(selectedFilters));
      dispatch(applyFilters());
    } else {
      delete selectedFilters[`${mainLabel}`];
      dispatch(applyFilters());
    }
    const accessories = ['Clothes', 'Mobile', 'Sports', 'Electronics', 'Books', 'Watch'];
    if (accessories.includes(labelText) && !checked) {
      addFilters(labelText);
    } else {
      if (accessories.includes(labelText)) {
        setLabel(Data);
      }
    }
    let flag = false;
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].disabled === false) {
        flag = true;
        break;
      }
    }
    if (flag === false) {
      dispatch(setAlert(true));
    }
  };

  const addFilters = (labelText) => {
    const LabelsToShow = [];
    let arr = productList;
    let size_arr = [];
    let color_arr = [];
    let brand_arr = [];
    arr.map((filteredProduct) => {
      if (filteredProduct.disabled === false) {
        size_arr.push(filteredProduct.size);
        color_arr.push(filteredProduct.color);
        brand_arr.push(filteredProduct.brand);
      }
    });
    const price_arr = [
      'Under 1000',
      '1000 - 5000',
      '5000 - 10,000',
      '10,000 - 20,000',
      'Over 20,000'
    ];
    size_arr = Array.from(new Set(size_arr));
    color_arr = Array.from(new Set(color_arr));
    brand_arr = Array.from(new Set(brand_arr));
    const new_object_size = {
      id: 'size',
      label: 'Size',
      sublabel: size_arr,
      open: false
    };
    const new_object_color = {
      id: 'color',
      label: 'Color',
      sublabel: color_arr,
      open: false
    };
    const new_object_brand = {
      id: 'brand',
      label: 'Brand',
      sublabel: brand_arr,
      open: false
    };
    const new_object_price = {
      id: 'price',
      label: 'Price',
      sublabel: price_arr,
      open: false
    };
    LabelsToShow.push(Data[0]);
    if (labelText === 'Electronics' || labelText === 'Mobile' || labelText === 'Watch') {
      LabelsToShow.push(new_object_color);
    } else if (labelText !== 'Books') {
      LabelsToShow.push(new_object_size);
      LabelsToShow.push(new_object_color);
    }
    LabelsToShow.push(new_object_brand);
    LabelsToShow.push(new_object_price);

    if (!checked) {
      setLabel(LabelsToShow);
    }
  };

  if (labelText === '') {
    return <> Nothing To Choose</>;
  } else {
    return (
      <Label for={field}>
        <FormInput
          type="checkbox"
          onChange={() => {
            filterFunction(labelText);
          }}
          labelText={labelText}
        />{' '}
        {labelText}
      </Label>
    );
  }
};

export default FormLabel;

FormLabel.propTypes = {
  field: PropTypes.string,
  labelText: PropTypes.string
};
