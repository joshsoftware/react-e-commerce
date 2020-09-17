import axios from 'axios';

export const getCartItemsApi = (token) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return axios({
    method: 'get',
    url: 'https://19019d7e17bf.ngrok.io/cart',
    headers: headers
  });
};

export const deleteCartItemApi = ({ token, product_id }) => {
  console.log('product id', product_id);
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return axios({
    method: 'delete',
    url: `https://19019d7e17bf.ngrok.io/cart?productId=${product_id}`,
    headers: headers
  });
};

export const updateCartItemsApi = ({ token, product_id, quantity }) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  console.log('quantity and product_id', quantity, product_id);
  return axios({
    method: 'put',
    url: `https://19019d7e17bf.ngrok.io/cart?productId=${product_id}&quantity=${quantity}`,
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
    url: `https://19019d7e17bf.ngrok.io/cart?productId=${product_id}`,
    headers: headers
  });
};
