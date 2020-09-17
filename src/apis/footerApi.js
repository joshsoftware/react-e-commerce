import axios from 'axios';

const getFooterListApi = () => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return axios({
    method: 'get',
    url: 'https://19019d7e17bf.ngrok.io/footer',
    headers: headers
  });
};

export { getFooterListApi };
