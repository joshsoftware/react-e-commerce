import apiHelper from './apiHelper';

const searchbar = (searchproduct) => {
  let search_product = searchproduct;
  // console.log('reg api', country, state, ci);
  console.log('searchproduct', search_product);

  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return apiHelper(
    'get',
    `https://19019d7e17bf.ngrok.io/products/search?text=${search_product}`,
    null,
    headers
  );
};
export default searchbar;
