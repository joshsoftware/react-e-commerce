import apiHelper from './apiHelper';

const loginOAuth = (access_token) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  console.log('in api', access_token);
  return apiHelper(
    'post',
    'https://c1f16287d8c6.ngrok.io/auth/google',
    {
      access_token
    },
    headers
  );
};
export default loginOAuth;
