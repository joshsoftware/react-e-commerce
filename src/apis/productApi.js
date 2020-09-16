import axios from 'axios';
export const getProductListApi = (page) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return axios({
    method: 'get',
    url: `https://c1f16287d8c6.ngrok.io/products?limit=9&page=${page}`,
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
    url: `https://c1f16287d8c6.ngrok.io/product/${id}`,
    headers: headers
  });
};
export const updateProductStockApi = ({ id, stockChange }) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return axios({
    method: 'put',
    url: `https://c1f16287d8c6.ngrok.io/product/stock?product_id=${id}&stock=${stockChange}`,
    headers: headers
  });
};
