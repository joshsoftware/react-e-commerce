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
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return apiHelper(
    'patch',
    `${process.env.REACT_APP_SERVER_URL}user/update`,
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
