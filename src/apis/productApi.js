import axios from 'axios';

const getProductListApi = () => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return axios({
    method: 'get',
    url: 'http://e5f7ca866cd7.ngrok.io/products',
    headers: headers
  });
};

export { getProductListApi };
