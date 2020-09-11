import apiHelper from './apiHelper';
import { useSelector } from 'react-redux';


const getCartItemsApi = () => {
  const { userDetails } = useSelector((state) => state.loginReducer);
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: userDetails.token
  };
  return apiHelper('get', 'https://api.taiga.io/api/v1/auth', headers);
};

export { getCartItemsApi };
