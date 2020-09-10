import apiHelper from './apiHelper';

const getCartItemsApi = () => {
  return apiHelper('post', 'https://api.taiga.io/api/v1/auth', {
    type: 'normal'
  });
};
export { getCartItemsApi };
