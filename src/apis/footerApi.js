import axios from 'axios';

const getFooterListApi = () => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return axios({
    method: 'get',
    url: 'https://69cc90ef47d8.ngrok.io/footer',
    headers: headers
  });
};

export { getFooterListApi };
