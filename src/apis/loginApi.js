import apiHelper from './apiHelper';

const login = ({ email, password }) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  console.log('in api', email, password);
  return apiHelper(
    'post',
    'https://69cc90ef47d8.ngrok.io/login',
    {
      email,
      password,
      type: 'normal'
    },
    headers
  );
};
export default login;
