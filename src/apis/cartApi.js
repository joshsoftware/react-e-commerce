import axios from 'axios';
import apiHelper from './apiHelper';

const getCartItemsApi = (token) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return axios({
    method: 'get',
    url: 'http://e5f7ca866cd7.ngrok.io/cart',
    headers: headers
  });
};

export { getCartItemsApi };

export const deleteCartItemApi = ({ token, product_id }) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token,
    product_id: product_id
  };
  return apiHelper('delete', 'https://2a28c783a98e.ngrok.io/cart', headers);
};
