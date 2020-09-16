import apiHelper from './apiHelper';

const loginOAuth = (access_token) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return apiHelper(
    'post',
    `${process.env.REACT_APP_SERVER_URL}auth/google`,
    {
      access_token
    },
    headers
  );
};
export default loginOAuth;
