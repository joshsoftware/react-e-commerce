import axios from 'axios';

const getFooterListApi = () => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return axios({
    method: 'get',
    url: 'https://c1f16287d8c6.ngrok.io/footer',
    headers: headers
  });
};

export { getFooterListApi };
