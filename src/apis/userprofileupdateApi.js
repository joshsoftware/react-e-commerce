import apiHelper from './apiHelper';

const userprofileupdateApi = ({
  firstname,
  lastname,
  password,
  form_country,
  form_state,
  form_city,
  address,
  imageUrl,
  token
}) => {
  let data = new FormData();
  data.append('first_name', firstname);
  data.append('last_name', lastname);
  data.append('country', form_country);
  data.append('state', form_state);
  data.append('city', form_city);
  data.append('password', password);
  data.append('address', address);
  if (typeof imageUrl !== 'string') {
    data.append('profile_image', imageUrl);
  }
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return apiHelper('patch', `${process.env.REACT_APP_SERVER_URL}user/update`, data, headers);
};
export default userprofileupdateApi;
