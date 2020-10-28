import axios from 'axios';

const getUserProfileApi = (token) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_SERVER_URL}user`,
    headers: headers
  });
};

export { getUserProfileApi };
