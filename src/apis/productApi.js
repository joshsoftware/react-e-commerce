import axios from 'axios';
export const getProductListApi = (page) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_SERVER_URL}products?limit=8&page=${page}`,
    headers: headers
  });
};
export const getProductByIdApi = (id) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_SERVER_URL}product/${id}`,
    headers: headers
  });
};
export const updateProductStockApi = ({ id, stockChange }) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return axios({
    method: 'put',
    url: `${process.env.REACT_APP_SERVER_URL}product/stock?product_id=${id}&stock=${stockChange}`,
    headers: headers
  });
};
