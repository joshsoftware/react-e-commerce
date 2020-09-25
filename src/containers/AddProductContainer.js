import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as yup from 'yup';
import AddProductComponent from '../components/AddProductComponent';
import { setErrors, resetErrors, addProductRequest, resetState } from '../actions/formActions';
import productListReducer from '../reducers/productListReducer';
import { resetProductList } from '../actions/productListActions';

const AddProductContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
  }, []);
  const productListDispatch = useDispatch(productListReducer);
  const { userDetails } = useSelector((state) => state.loginReducer);
  const addProductState = useSelector((state) => state.addProductReducer);
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
    productPrice: yup
      .number()
      .required()
      .typeError('you must specify a number')
      .test('positive', 'price must be greater than 0', (value) => {
        if (value <= 0) {
          return false;
        }
        return true;
      }),
    discount: yup
      .number()
      .required()
      .typeError('you must specify a number')
      .test('positive', 'discount must be greater than 0 and less than 100', (value) => {
        if (value <= 0 || value > 100) {
          return false;
        }
        return true;
      }),
    tax: yup
      .number()
      .required()
      .typeError('you must specify a number')
      .test('positive', 'tax must be greater than 0 and less than 100', (value) => {
        if (value <= 0 || value > 100) {
          return false;
        }
        return true;
      }),
    stock: yup.number().required().min(0).integer().typeError('you must specify a number'),
    brand: yup.string().required(),
    categoryId: yup.string().required(),
    category: yup.string().required(),
    color: yup.string(),
    size: yup.string(),
    imageUrl: yup
      .mixed()
      .required()
      .test('extension', 'allowed files jpg, jpeg, gif, webp, png', (value) => {
        let array = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png', 'image/webp'];
        if (value !== null) {
          return array.includes(value.type);
        }
      })
  });

  if (!userDetails.isAdmin) {
    return <Redirect to="/products" />;
  }

  const validateData = () => {
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
