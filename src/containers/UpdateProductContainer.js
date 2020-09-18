import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as yup from 'yup';
import UpdateProductComponent from '../components/UpdateProductComponent';
import { setErrors, resetErrors, updateProductRequest } from '../actions/formActions';
import productListReducer from '../reducers/productListReducer';
import { resetProductList } from '../actions/productListActions';
//import { productListReducer } from '../reducers/productListReducer';

const UpdateProductContainer = () => {
  const dispatch = useDispatch();
  const productListDispatch = useDispatch(productListReducer);
  const { userDetails } = useSelector((state) => state.loginReducer);
  const updateProductState = useSelector((state) => state.updateProductReducer);
  const { updateProductId } = useSelector((state) => state.productListReducer);

  const {
    productTitle,
    description,
    productPrice,
    discount,
    tax,
    stock,
    brand,
    categoryId,
    category,
    color,
    size,
    imageUrl
  } = updateProductState;

  const schema = yup.object().shape({
    productTitle: yup.string(),
    description: yup.string(),
    productPrice: yup.number().min(0),
    discount: yup.number().min(0),
    tax: yup.number().min(0),
    stock: yup.number().min(0).integer(),
    brand: yup.string(),
    categoryId: yup.string(),
    category: yup.string(),
    color: yup.string(),
    size: yup.string(),
    imageUrl: yup.string()
  });

  if (!userDetails.isAdmin) {
    return <Redirect to="/products" />;
  }

  const validateData = () => {
    console.log('in validate data');
    dispatch(resetErrors());
    schema
      .isValid({
        productTitle,
        description,
        productPrice,
        discount,
        tax,
        stock,
        brand,
        categoryId,
        category,
        color,
        size,
        imageUrl
      })
      .then(function (valid) {
        if (!valid) {
          schema
            .validate(
              {
                productTitle,
                description,
                productPrice,
                discount,
                tax,
                stock,
                brand,
                categoryId,
                category,
                color,
                size,
                imageUrl
              },
              { abortEarly: false }
            )
            .catch((err) => {
              err.inner.forEach((ele) => {
                dispatch(setErrors(ele));
              });
            });
        } else {
          //console.log('form submitted', addProductState);
          let token = userDetails.token;
          dispatch(
            updateProductRequest({
              updateProductId,
              productTitle,
              description,
              productPrice,
              discount,
              tax,
              stock,
              brand,
              categoryId,
              category,
              color,
              size,
              imageUrl,
              token
            })
          );
          productListDispatch(resetProductList());
        }
      });
  };

  if (updateProductState.productUpdated) {
    return <Redirect to="/admindashboard" />;
  }

  return (
    <UpdateProductComponent
      validateData={validateData}
      dispatch={dispatch}
      formState={updateProductState}
    />
  );
};

export default UpdateProductContainer;
