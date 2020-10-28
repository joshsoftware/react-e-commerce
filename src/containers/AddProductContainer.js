import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as yup from 'yup';
import AddProductComponent from '../components/AddProductComponent';
import { setErrors, resetErrors, addProductRequest, resetState } from '../actions/formActions';
import productListReducer from '../reducers/productListReducer';
import { resetProductList } from '../actions/productListActions';
import ContainerWrapper from '../components/ContainerWrapper';
import AlertWrapper from '../components/AlertWrapper';
import alertReducer from '../reducers/alertReducer';
import { alertMessage } from '../actions/alertActions';

const AddProductContainer = () => {
  const { alert, alertText } = useSelector((state) => state.alertReducer);
  const dispatch = useDispatch();
  const alertDispatch = useDispatch(alertReducer);
  useEffect(() => {
    dispatch(resetState());
  }, []);
  const timeOutFunction = async () => {
    setTimeout(() => {
      alertDispatch(alertMessage({ alert: false, alertText: '' }));
    }, 2000);
  };
  useEffect(() => {
    if (alert === true) {
      timeOutFunction();
    }
  }, [alert]);
  const productListDispatch = useDispatch(productListReducer);
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
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
      .test('required', 'price is a required field', (value) => {
        if (value === null) {
          return false;
        }
        return true;
      })
      .typeError('you must specify a number')
      .nullable()
      .test('positive', 'price must be greater than 0', (value) => {
        if (value <= 0 && value !== null) {
          return false;
        }
        return true;
      }),
    discount: yup
      .number()
      .required()
      .typeError('you must specify a number')
      .nullable()
      .test('positive', 'discount must be greater than 0 and less than 100', (value) => {
        if (value < 0 || value > 100) {
          return false;
        }
        return true;
      }),
    tax: yup
      .number()
      .required()
      .typeError('you must specify a number')
      .nullable()
      .test('positive', 'tax must be greater than 0 and less than 100', (value) => {
        if (value < 0 || value > 100) {
          return false;
        }
        return true;
      }),
    stock: yup
      .number()
      .required()
      .min(0)
      .integer()
      .typeError('you must specify a number')
      .nullable(),
    brand: yup.string().required(),
    categoryId: yup.string().required(),
    category: yup.string().test('required', 'Category is required', (value) => {
      if (value === '' || value === 'select category') {
        return false;
      }
      return true;
    }),
    color: yup.string(),
    size: yup.string(),
    imageUrl: yup
      .mixed()
      .test('required', 'Profile Picture is required', (value) => {
        if (value === '' || value === null) {
          return false;
        }
        return true;
      })
      .test('extension', 'allowed files jpg, jpeg, gif, webp, png', (value) => {
        let array = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png', 'image/webp'];
        if (value !== null) {
          return array.includes(value.type);
        }
        return true;
      })
  });
  if (userDetails) {
    if (!userDetails.token) {
      return <Redirect to="/login" />;
    }
    if (!userDetails.isAdmin) {
      return <Redirect to="/products" />;
    }
  } else {
    return <Redirect to="/login" />;
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
          // dispatch(resetState());
          productListDispatch(resetProductList());
        }
      });
  };
  if (addProductState.productAdded) {
    return <Redirect to="/admin/products" />;
  }
  return (
    <>
      <AlertWrapper
        className="text-center fixed-top"
        color={'danger'}
        isOpen={alert}
        data={alertText}
      />
      <ContainerWrapper
        data={
          <AddProductComponent
            validateData={validateData}
            dispatch={dispatch}
            formState={addProductState}
          />
        }
      />
    </>
  );
};

export default AddProductContainer;
