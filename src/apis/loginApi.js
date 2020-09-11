import apiHelper from './apiHelper';

const login = ({ email, password }) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  console.log('in api', email, password);
  return apiHelper(
    'post',
    'https://2a28c783a98e.ngrok.io/login',
    {
      email,
      password,
      type: 'normal'
    },
    headers
  );
};
export default login;
