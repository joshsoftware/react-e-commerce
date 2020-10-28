import axios from 'axios';

export const countryData = () => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_SERVER_URL}country_data`,
    headers: headers
  });
};
