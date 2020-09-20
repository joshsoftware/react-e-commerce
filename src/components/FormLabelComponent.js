import React, { useState, useEffect } from 'react';
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import { useDispatch, useSelector } from 'react-redux';
import Data from './Data';
import { setFilters, applyFilters, setAlert, deleteFilters, setFilteredProducts, applyPriceFilter, resetFilter } from '../actions/productListActions';

const FormLabel = ({ field, labelText, mainLabel, setLabel }) => {
  const dispatch = useDispatch();
  const { productList, filters } = useSelector((state) => state.productListReducer);
  const accessories = ['Clothes', 'Mobile', 'Sports', 'Electronics', 'Books', 'Watch', 'All'];

  useEffect(() => {
    dispatch(applyFilters());
  }, [productList])

  let LabelsToShow = [];
  const [checked, setChecked] = useState(false);
  
  const filterFunction = (labelText) => {
    console.log(" Label text", labelText)
    try {
      dispatch(setAlert(false));
      setChecked(!checked);
      let selectedFilters = {}
      selectedFilters[`${mainLabel}`] = labelText;
      if (!checked && !accessories.includes(labelText)) {
        dispatch(setFilters(selectedFilters));
        dispatch(applyFilters());
        dispatch(applyPriceFilter());
        dispatch(setFilteredProducts());
      } else if(!accessories.includes(labelText)){
        dispatch(deleteFilters(selectedFilters));
        dispatch(applyFilters());
        dispatch(applyPriceFilter());
        dispatch(setFilteredProducts());
      }
      
      if (accessories.includes(labelText)) {
        dispatch(resetFilter());
        dispatch(setFilters(selectedFilters))
        dispatch(applyFilters());
        dispatch(applyPriceFilter());
        addFilters(labelText);
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
    }
    catch (error) {
      console.log("error", error);
    } 
  };

  const addFilters = (labelText) => {
    
    let arr = productList;
    console.log('inside add filters', arr);
    LabelsToShow = []
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
      sublabel: [],
      open: true
    };
    LabelsToShow.push(Data[0]);
    //if (filters.category.includes('Clothes') || filters.category.includes('Sports') || filters.category.includes('Electronics') || filters.category.includes('Mobile') || filters.category.includes('Watch')) {
    // if(labelText === "Clothes" || labelText === "Sports" || labelText === "Electronics" || labelText === "Mobile" || labelText === "Watch") { 
    //   LabelsToShow.push(new_object_color);
    // } 
    //if (filters.category.includes('Clothes') || filters.category.includes('Sports')) {
    // if(labelText === "Clothes" || labelText === "Sports"){
    //   LabelsToShow.push(new_object_size);
    // }
    LabelsToShow.push(new_object_color);
    LabelsToShow.push(new_object_size);
    LabelsToShow.push(new_object_brand);
    LabelsToShow.push(new_object_price);

    if (!checked) {
      setLabel(LabelsToShow);
    }
  };

  if (labelText === '') {
    return <>Nothing to choose </>;
  } else {
    if(labelText === "Clothes" || labelText === "Mobile" || labelText === "Sports" || labelText === "Electronics" || labelText === "Books" || labelText === "Watch" || labelText === "All"){
      return (
        // <Label for={field}>
        //   <FormInput
        //     type="radio"
        //     onChange={() => {
        //       filterFunction(labelText);
        //     }}
        //     labelText={labelText}
        //   />{' '}
        //   {labelText}
        // </Label>
        <>
        <div class="form-check">
        <Label class="form-check-label" for="exampleRadios1">
            <FormInput 
              class="form-check-input" 
              type="radio" 
              name="exampleRadios" 
              id="exampleRadios1" 
              value={labelText} 
              onChange={() => {filterFunction(labelText);
                addFilters(labelText);}}
            />{' '}
            {labelText}
          </Label>
        </div>
      </>
      );
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
  }
};

export default FormLabel;

FormLabel.propTypes = {
  field: PropTypes.string,
  labelText: PropTypes.string
};
