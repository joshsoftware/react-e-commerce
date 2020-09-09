import apiHelper from './apiHelper';

const registration = ({ firstname, lastname, email, password, country, state, city, address }) => {
  return apiHelper('post', 'https://api.taiga.io/api/v1/auth', {
    firstname,
    lastname,
    email,
    password,
    country,
    state,
    city,
    address,
    type: 'normal'
  });
};
export default registration;
