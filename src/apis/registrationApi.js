import apiHelper from './apiHelper';

const registration = ({
  firstname,
  lastname,
  email,
  password,
  form_country,
  form_state,
  form_city,
  address
}) => {
  let first_name = firstname,
    last_name = lastname,
    country = form_country,
    state = form_state,
    city = form_city;
  console.log('reg api', country, state, city);
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return apiHelper(
    'post',
    'https://19019d7e17bf.ngrok.io/register',
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
