import apiHelper from './apiHelper';

const userprofileupdateApi = ({
  firstname,
  lastname,
  password,
  form_country,
  form_state,
  form_city,
  address,
  token
}) => {
  let first_name = firstname,
    last_name = lastname,
    country = form_country,
    state = form_state,
    city = form_city;
  console.log(first_name, last_name, token);
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return apiHelper(
    'patch',
    'https://69cc90ef47d8.ngrok.io/user/update',
    {
      first_name,
      last_name,
      password,
      country,
      state,
      city,
      address
    },
    headers
  );
};
export default userprofileupdateApi;
