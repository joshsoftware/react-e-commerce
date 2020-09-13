import axios from 'axios';

const getFooterListApi = () => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return axios({
    method: 'get',
    url: 'https://31dc46b31830.ngrok.io/footer',
    headers: headers
  });
};

export { getFooterListApi };
