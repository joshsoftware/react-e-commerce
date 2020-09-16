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
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return apiHelper(
    'post',
    `${process.env.REACT_APP_SERVER_URL}register`,
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
