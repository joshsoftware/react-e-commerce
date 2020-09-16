import axios from 'axios';

const apiHelper = (type, url, data, headers) => {
  return axios({
    method: type,
    url,
    data,
    headers: headers
  });
};

export default apiHelper;
