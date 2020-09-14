import axios from 'axios';

const getUserProfileApi = (token) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return axios({
    method: 'get',
    url: 'https://66e5f4171704.ngrok.io/user',
    headers: headers
  });
};

export { getUserProfileApi };
