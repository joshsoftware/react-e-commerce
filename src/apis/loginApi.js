import apiHelper from './apiHelper';

const login = ({ email, password }) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  console.log('in api', email, password);
  return apiHelper(
    'post',
    `${process.env.REACT_APP_SERVER_URL}login`,
    {
      email,
      password,
      type: 'normal'
    },
    headers
  );
};
export default login;
