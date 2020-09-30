import apiHelper from './apiHelper';

const registration = ({
  firstname,
  lastname,
  email,
  password,
  form_country,
  form_state,
  form_city,
  address,
  imageUrl
}) => {
  let data = new FormData();
  data.append('first_name', firstname);
  data.append('last_name', lastname);
  data.append('country', form_country);
  data.append('email', email);
  data.append('password', password);
  data.append('state', form_state);
  data.append('city', form_city);
  data.append('address', address);
  data.append('profile_image', imageUrl);
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return apiHelper('post', `${process.env.REACT_APP_SERVER_URL}register`, data, headers);
};
export default registration;
