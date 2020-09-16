import axios from 'axios';

const getUserProfileApi = (token) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return axios({
    method: 'get',
    url: 'https://c1f16287d8c6.ngrok.io/user',
    headers: headers
  });
};

export { getUserProfileApi };
