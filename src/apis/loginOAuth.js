import apiHelper from './apiHelper';

const loginOAuth = (access_token) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  console.log('in api', access_token);
  return apiHelper(
    'post',
    'https://69cc90ef47d8.ngrok.io/auth/google',
    {
      access_token
    },
    headers
  );
};
export default loginOAuth;
