import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CategoryDropdownContainer from './CategoryDropdownContainer';
import FormLabel from '../components/FormLabel';
import FormField from '../components/FormField';
import { setField } from '../actions/formActions';
import ContainerWrapper from '../components/ContainerWrapper';

let category = {
    field: 'exampleCategory',
    labelText: 'Category *',
    type: 'category',
    name: 'category',
    placeholder: 'category'
  },
  color = {
    field: 'exampleColor',
    labelText: 'Color',
    type: 'text',
    name: 'color',
    placeholder: 'color'
  },
  size = {
    field: 'exampleSize',
    labelText: 'Size',
    type: 'size',
    name: 'size',
    placeholder: 'XS, S, L, XL'
  };

const ProductCategoryContainer = ({ dispatch, formState }) => {
  category = {
    ...category,
    value: formState.category,
    onChange: (evt) => {
      dispatch(setField('category', evt.target.value));
    },
    invalid: formState.categoryError !== null ? true : false,
    message: formState.categoryError
  };
  color = {
    ...color,
    value: formState.color,
    onChange: (evt) => {
      dispatch(setField('color', evt.target.value));
    },
    invalid: formState.colorError !== null ? true : false,
    message: formState.colorError
  };
  size = {
    ...size,
    value: formState.size,
    onChange: (evt) => {
      dispatch(setField('size', evt.target.value));
    },
    invalid: formState.sizeError !== null ? true : false,
    message: formState.sizeError
  };
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let ar = ['Clothes', 'Electronics', 'Mobile', 'Watch', 'Books', 'Sports'];
    setCategories(ar);
  }, []);
  let ar2 = [];
  if (['Clothes', 'Electronics', 'Mobile', 'Watch', 'Sports'].includes(formState.category)) {
    ar2.push(<FormField key={0} formfield={color} />);
  }
  if (['Clothes', 'Sports'].includes(formState.category)) {
    ar2.push(<FormField key={1} formfield={size} />);
  }
  return (
    <>
      <FormLabel field={category.field} labelText={category.labelText} />
      <CategoryDropdownContainer
        data={categories}
        type="category"
        state={formState.category}
        dispatch={dispatch}
      />
      <br />
      <ContainerWrapper data={ar2} />
    </>
  );
};

export default ProductCategoryContainer;

ProductCategoryContainer.propTypes = {
  formState: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};
