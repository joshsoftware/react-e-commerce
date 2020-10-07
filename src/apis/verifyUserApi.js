import apiHelper from './apiHelper';

const verifyUserApi = ({ password, token }) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return apiHelper(
    'patch',
    `${process.env.REACT_APP_SERVER_URL}verifyUser`,
    {
      password
    },
    headers
  );
};

export default verifyUserApi;
