import axios from 'axios';

export const getProductListApi = () => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return axios({
    method: 'get',
    url: 'https://69cc90ef47d8.ngrok.io/products',
    headers: headers
  });
};

export const getProductByIdApi = (id) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  console.log('id', id);
  return axios({
    method: 'get',
    url: `https://69cc90ef47d8.ngrok.io/product/${id}`,
    headers: headers
  });
};

export const updateProductStockApi = ({ id, stockChange }) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return axios({
    method: 'put',
    url: `https://69cc90ef47d8.ngrok.io/product/stock?product_id=${id}&stock=${stockChange}`,
    headers: headers
  });
};
