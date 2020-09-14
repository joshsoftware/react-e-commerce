import React, {useState} from 'react';
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import Data from './Data';
import { getProductList, setProductList } from '../actions/productListActions';
import { getProductListApi } from '../apis/productApi';

const FormLabel = ({ field, labelText, mainLabel, setLabel, setProducts, products }) => {
  const dispatch = useDispatch();
  dispatch(getProductList());
  const { productList } = useSelector((state) => state.productListReducer);
  const productLists = productList;


  const [checked, setChecked] = useState(false);

  const filterFunction = (labelText) => {
    const accessories = ["Clothes", "Mobile", "Sports", "Electronics", "Books"];
    if(accessories.includes(labelText)){
      setChecked(!checked);
      if(!checked){
        let products_arr = [];
        productList.filter(item => item[`${mainLabel}`] === labelText).map(filteredItem => (
          products_arr.push(filteredItem)
        ))
        console.log(products_arr);
        dispatch(setProductList(products_arr));
        //setProducts(products_arr);
        addFilters(products_arr);
      }
      else{
        setLabel(Data);
        dispatch(setProductList(productList));
      }
    }
    else{
      setChecked(!checked);
      if(!checked){
        let products_arr = [];
        productList.filter(item => item[`${mainLabel}`] === labelText).map(filteredItem => (
          products_arr.push(filteredItem)
        ))  
        dispatch(setProductList(products_arr));
        console.log(products_arr);
      }
    }
  }

  const addFilters = (props) => {
    const LabelsToShow = [];
    let arr = props;
    let size_arr = [];
    let color_arr = [];
    let brand_arr = [];
    arr.map(filteredProduct => (
      size_arr.push(filteredProduct.size)
    ))
    arr.map(filteredProduct => (
      color_arr.push(filteredProduct.color)
    ))
    arr.map(filteredProduct => (
      brand_arr.push(filteredProduct.brand)
    ))
    size_arr = Array.from(new Set(size_arr));
    color_arr = Array.from(new Set(color_arr));
    brand_arr = Array.from(new Set(brand_arr));
    const new_object_size = {
      "id": "size",
      "label": "Size",
      "sublabel": size_arr,
      "open": false
    }
    const new_object_color = {
      "id": "color",
      "label": "Color",
      "sublabel": color_arr,
      "open": false
    }
    const new_object_brand = {
      "id": "brand",
      "label": "Brand",
      "sublabel": brand_arr,
      "open": false
    }
    LabelsToShow.push(Data[0]);
    LabelsToShow.push(new_object_size);
    LabelsToShow.push(new_object_color);
    LabelsToShow.push(new_object_brand);
    if(!checked){
      setLabel(LabelsToShow);
    }
  }

  if(labelText === ""){
  return(<> Nothing To Choose</>);
  }
  else{
    return (
      <Label for={field}>
        <FormInput type="checkbox" onChange={() => {filterFunction(labelText)}} labelText={labelText} /> {labelText}
      </Label>
    );
  }
};

export default FormLabel;

FormLabel.propTypes = {
  field: PropTypes.string,
  labelText: PropTypes.string
};
