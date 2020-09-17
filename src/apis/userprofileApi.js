import axios from 'axios';

const getUserProfileApi = (token) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return axios({
    method: 'get',
    url: 'https://19019d7e17bf.ngrok.io/user',
    headers: headers
  });
};

export { getUserProfileApi };
