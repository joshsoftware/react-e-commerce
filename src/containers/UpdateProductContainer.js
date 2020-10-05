import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as yup from 'yup';
import UpdateProductComponent from '../components/UpdateProductComponent';
import { setErrors, resetErrors, updateProductRequest } from '../actions/formActions';
import productListReducer from '../reducers/productListReducer';
import { resetProductList } from '../actions/productListActions';
import AlertWrapper from '../components/AlertWrapper';
import alertReducer from '../reducers/alertReducer';
import { alertMessage } from '../actions/alertActions';

const UpdateProductContainer = () => {
  const alertState = useSelector((state) => state.alertReducer);
  const dispatch = useDispatch();
  const alertDispatch = useDispatch(alertReducer);
  const productListDispatch = useDispatch(productListReducer);
  // const { userDetails } = useSelector((state) => state.loginReducer);
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  const updateProductState = useSelector((state) => state.updateProductReducer);
  const { updateProductId } = useSelector((state) => state.productListReducer);

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
    productPrice: yup
      .number()
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
      .typeError('you must specify a number')
      .nullable()
      .test('positive', 'tax must be greater than 0 and less than 100', (value) => {
        if (value < 0 || value > 100) {
          return false;
        }
        return true;
      }),
    stock: yup.number().min(0).integer().typeError('you must specify a number').nullable(),
    brand: yup.string(),
    categoryId: yup.string(),
    category: yup.string(),
    color: yup.string(),
    size: yup.string(),
    imageUrl: yup.mixed().test('extension', 'allowed files jpg, jpeg, gif, webp, png', (value) => {
      let array = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png', 'image/webp'];
      if (value !== null) {
        return array.includes(value.type);
      }
      return true;
    })
  });

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
    return <Redirect to="/admin/products" />;
  }
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

  return (
    <>
      <AlertWrapper
        className="text-center fixed-top"
        color={alertState.color}
        isOpen={alertState.alert}
        data={alertState.alertText}
      />
      <UpdateProductComponent
        validateData={validateData}
        dispatch={dispatch}
        formState={updateProductState}
      />
    </>
  );
};

export default UpdateProductContainer;
