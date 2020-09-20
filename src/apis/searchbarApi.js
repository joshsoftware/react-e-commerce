import apiHelper from './apiHelper';

const searchbar = (searchproduct) => {
  let search_product = searchproduct;
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return apiHelper(
    'get',
    `${process.env.REACT_APP_SERVER_URL}products/search?text=${search_product}`,
    null,
    headers
  );
};
export default searchbar;
