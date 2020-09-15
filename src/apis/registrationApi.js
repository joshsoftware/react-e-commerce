import apiHelper from './apiHelper';

const registration = ({ firstname, lastname, email, password, country, state, city, address }) => {
  let first_name = firstname,
    last_name = lastname;
  console.log(first_name, last_name);
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return apiHelper(
    'post',
    'https://69cc90ef47d8.ngrok.io/register',
    {
      first_name,
      last_name,
      email,
      password,
      country,
      state,
      city,
      address
    },
    headers
  );
};
export default registration;
