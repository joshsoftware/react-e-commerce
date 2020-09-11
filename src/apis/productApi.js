import apiHelper from './apiHelper';

const getProductListApi = () => {
  return apiHelper('get', 'https://api.taiga.io/api/v1/auth');
};

export { getProductListApi };
