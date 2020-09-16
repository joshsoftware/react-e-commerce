import axios from 'axios';

export const getCartItemsApi = (token) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_SERVER_URL}cart`,
    headers: headers
  });
};

export const deleteCartItemApi = ({ token, product_id }) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return axios({
    method: 'delete',
    url: `${process.env.REACT_APP_SERVER_URL}cart?productId=${product_id}`,
    headers: headers
  });
};

export const updateCartItemsApi = ({ token, product_id, quantity }) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return axios({
    method: 'put',
    url: `${process.env.REACT_APP_SERVER_URL}cart?productId=${product_id}&quantity=${quantity}`,
    headers: headers
  });
};

export const addCartItemApi = ({ token, product_id }) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return axios({
    method: 'post',
    url: `${process.env.REACT_APP_SERVER_URL}cart?productId=${product_id}`,
    headers: headers
  });
};
