import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as yup from 'yup';
import AddProductComponent from '../components/AddProductComponent';
import { setErrors, resetErrors, addProductRequest, resetState } from '../actions/formActions';
import productListReducer from '../reducers/productListReducer';
import { resetProductList } from '../actions/productListActions';
import alertReducer from '../reducers/alertReducer';
import { alertMessage } from '../actions/alertActions';

const AddProductContainer = () => {
  const dispatch = useDispatch();
  const productListDispatch = useDispatch(productListReducer);
  const alertDispatch = useDispatch(alertReducer);
  const { userDetails } = useSelector((state) => state.loginReducer);
  const addProductState = useSelector((state) => state.addProductReducer);
  useEffect(() => {
    alertDispatch(alertMessage({ alert: true, alertText: 'Product Added Successfully' }));
  }, []);
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
  } = addProductState;
  const schema = yup.object().shape({
    productTitle: yup.string().required(),
    description: yup.string().required(),
    productPrice: yup.number().required().min(0),
    discount: yup.number().required().min(0),
    tax: yup.number().required().min(0),
    stock: yup.number().required().min(0).integer(),
    brand: yup.string().required(),
    categoryId: yup.string().required(),
    category: yup.string().required(),
    color: yup.string(),
    size: yup.string(),
    imageUrl: yup.string().required()
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
          console.log('form submitted', addProductState);
          let token = userDetails.token;
          dispatch(
            addProductRequest({
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
          dispatch(resetState());
          productListDispatch(resetProductList());
        }
      });
  };
  if (addProductState.productAdded) {
    return <Redirect to="/admindashboard" />;
  }
  return (
    <AddProductComponent
      validateData={validateData}
      dispatch={dispatch}
      formState={addProductState}
    />
  );
};

export default AddProductContainer;
