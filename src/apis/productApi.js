import axios from 'axios';

const getProductListApi = () => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return axios({
    method: 'get',
    url: 'https://66e5f4171704.ngrok.io/products',
    headers: headers
  });
};

export { getProductListApi };
