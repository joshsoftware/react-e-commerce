import React from 'react';
import FormField from './FormField';
import ProductCategoryContainer from '../containers/ProductCategoryContainer';
import { Form } from 'reactstrap';
import PropTypes from 'prop-types';
import ButtonWrapper from './ButtonWrapper';
import { setField } from '../actions/formActions';
import alertReducer from '../reducers/alertReducer';
import { useDispatch } from 'react-redux';
import { alertMessage } from '../actions/alertActions';

let productTitle = {
    field: 'exampleProductTitle',
    labelText: 'Product Title',
    type: 'productTitle',
    name: 'productTitle',
    placeholder: 'title'
  },
  description = {
    field: 'exampleDescription',
    labelText: 'Description',
    type: 'description',
    name: 'description',
    placeholder: 'description'
  },
  productPrice = {
    field: 'exampleProductPrice',
    labelText: 'Product Price',
    type: 'productPrice',
    name: 'productPrice',
    placeholder: '0.00'
  },
  discount = {
    field: 'exampleDiscount',
    labelText: 'Discount',
    type: 'discount',
    name: 'discount',
    placeholder: '0.00'
  },
  tax = {
    field: 'exampleTax',
    labelText: 'Tax',
    type: 'tax',
    name: 'tax',
    placeholder: '0.00'
  },
  stock = {
    field: 'exampleStock',
    labelText: 'Stock',
    type: 'stock',
    name: 'stock',
    placeholder: '0'
  },
  brand = {
    field: 'exampleBrand',
    labelText: 'Brand',
    type: 'brand',
    name: 'brand',
    placeholder: 'brand'
  },
  imageUrl = {
    field: 'exampleImageURL',
    labelText: 'ImageURL',
    type: 'imageUrl',
    name: 'imageUrl',
    placeholder: '**.**'
  };

const UpdateProductForm = ({ validateData, dispatch, formState }) => {
  productTitle = {
    ...productTitle,
    value: formState.productTitle,
    onChange: (evt) => {
      dispatch(setField('productTitle', evt.target.value));
    },
    invalid: formState.productTitleError !== null ? true : false,
    message: formState.productTitleError
  };
  description = {
    ...description,
    value: formState.description,
    onChange: (evt) => {
      dispatch(setField('description', evt.target.value));
    },
    invalid: formState.descriptionError !== null ? true : false,
    message: formState.descriptionError
  };
  productPrice = {
    ...productPrice,
    value: formState.productPrice,
    onChange: (evt) => {
      dispatch(setField('productPrice', evt.target.value));
    },
    invalid: formState.productPriceError !== null ? true : false,
    message: formState.productPriceError
  };
  discount = {
    ...discount,
    value: formState.discount,
    onChange: (evt) => {
      dispatch(setField('discount', evt.target.value));
    },
    invalid: formState.discountError !== null ? true : false,
    message: formState.discountError
  };
  tax = {
    ...tax,
    value: formState.tax,
    onChange: (evt) => {
      dispatch(setField('tax', evt.target.value));
    },
    invalid: formState.taxError !== null ? true : false,
    message: formState.taxError
  };
  stock = {
    ...stock,
    value: formState.stock,
    onChange: (evt) => {
      dispatch(setField('stock', evt.target.value));
    },
    invalid: formState.stockError !== null ? true : false,
    message: formState.stockError
  };
  brand = {
    ...brand,
    value: formState.brand,
    onChange: (evt) => {
      dispatch(setField('brand', evt.target.value));
    },
    invalid: formState.brandError !== null ? true : false,
    message: formState.brandError
  };
  imageUrl = {
    ...imageUrl,
    value: formState.imageUrl,
    onChange: (evt) => {
      dispatch(setField('imageUrl', evt.target.value));
    },
    invalid: formState.imageUrlError !== null ? true : false,
    message: formState.imageUrlError
  };
  const alertDispatch = useDispatch(alertReducer);
  return (
    <>
      <h3>Update Product</h3>
      <hr />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          validateData();
          alertDispatch(alertMessage({ alert: true, alertText: 'Product Updated Successfully' }));
        }}>
        <FormField formfield={productTitle} />
        <FormField formfield={description} />
        <FormField formfield={productPrice} />
        <FormField formfield={discount} />
        <FormField formfield={tax} />
        <FormField formfield={stock} />
        <FormField formfield={brand} />
        <ProductCategoryContainer dispatch={dispatch} formState={formState} isRequired={false} />
        <FormField formfield={imageUrl} />

        <ButtonWrapper
          buttonText={'Update'}
          onSubmit={(e) => {
            e.preventDefault();
            validateData();
          }}
        />
      </Form>
    </>
  );
};

export default UpdateProductForm;

UpdateProductForm.propTypes = {
  validateData: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired
};
