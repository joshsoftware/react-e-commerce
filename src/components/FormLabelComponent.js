import React, { useState, useEffect } from 'react';
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import { useDispatch, useSelector } from 'react-redux';
import Data from './Data';
import { setFilters, applyFilters, setAlert, setMinMax, deleteFilters } from '../actions/productListActions';

const FormLabel = ({ field, labelText, mainLabel, setLabel }) => {
  const dispatch = useDispatch();
  const { productList, filters } = useSelector((state) => state.productListReducer);
  useEffect(() => {
    dispatch(applyFilters());
  }, [productList])
  const [checked, setChecked] = useState(false);
  const filterFunction = (labelText) => {
    dispatch(setAlert(false));
    setChecked(!checked);
    let selectedFilters = {}
    selectedFilters[`${mainLabel}`] = labelText;
    console.log('selected filter', selectedFilters);
    if (!checked) {
      dispatch(setFilters(selectedFilters)); // {'category': 'cloth'}
      console.log(filters);
      dispatch(applyFilters());
    } else {
      dispatch(deleteFilters(selectedFilters));
      console.log(filters);
      dispatch(applyFilters());
    }
    const accessories = ['Clothes', 'Mobile', 'Sports', 'Electronics', 'Books', 'Watch'];
    if (accessories.includes(labelText) && !checked) {
      addFilters(labelText);
    } else {
      addFilters(labelText);
      if (accessories.includes(labelText)) {
        // dispatch(deleteFilters(selectedFilters));
        dispatch(applyFilters());
        if(filters.category.length === 0) {
          setLabel(Data);
        }
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
    console.log('in add', filters.category);
    
    const LabelsToShow = [];
    let arr = productList;
    let size_arr = [];
    let color_arr = [];
    let brand_arr = [];
    let min = 1000000,
      max = 0;
    arr.map((filteredProduct) => {
      if (filteredProduct.disabled === false) {
        size_arr.push(filteredProduct.size);
        color_arr.push(filteredProduct.color);
        brand_arr.push(filteredProduct.brand);
        if (min >= filteredProduct.product_price) {
          min = filteredProduct.product_price;
        }
        if (max <= filteredProduct.product_price) {
          max = filteredProduct.product_price;
        }
      }
    });
    let offset = (max - min) / 3;
    dispatch(setMinMax(min, max));
    let price_arr = [];
    if( offset!==0 ) {
      price_arr = [
        `${min} - ${Math.floor(min + offset)}`,
        `${Math.floor(min + offset + 1)} - ${Math.floor(min + offset * 2)}`,
        `${Math.floor(min + offset * 2 + 1)} - ${max}`
      ];
    }
    else
    {
      price_arr = [`${min}`];
    }
    
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
    // "Clothes", "Mobile", "Electronics", "Sports", "Books", "Watch"
    // console.log('categories', filters.category, filters.category.includes('Clothes'));
    if (filters.category.includes('Clothes') || filters.category.includes('Sports') || filters.category.includes('Electronics') || filters.category.includes('Mobile') || filters.category.includes('Watch')) {
      LabelsToShow.push(new_object_color);
    } 
    if (filters.category.includes('Clothes') || filters.category.includes('Sports')) {
      LabelsToShow.push(new_object_size);
    }
    LabelsToShow.push(new_object_brand);
    LabelsToShow.push(new_object_price);

    // if (!checked) {
      setLabel(LabelsToShow);
    // }
  };

  if (labelText === '') {
    return <> </>;
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
