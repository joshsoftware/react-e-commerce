import apiHelper from './apiHelper';

const userprofileupdate = ({
  firstname,
  lastname,
  password,
  country,
  state,
  city,
  address,
  token
}) => {
  let first_name = firstname,
    last_name = lastname;
  console.log(first_name, last_name);
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return apiHelper(
    'put',
    'http://e5f7ca866cd7.ngrok.io/user/update',
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
export default userprofileupdate;
