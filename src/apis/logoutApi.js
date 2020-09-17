import axios from 'axios';

const logout = (token) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return axios({
    method: 'delete',
    url: `${process.env.REACT_APP_SERVER_URL}logout`,
    headers: headers
  });
};
export default logout;
