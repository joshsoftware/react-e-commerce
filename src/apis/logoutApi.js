import apiHelper from './apiHelper';

const logout = ({ token }) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    token: token
  };
  return apiHelper('delete', '', headers);
};
export default logout;
