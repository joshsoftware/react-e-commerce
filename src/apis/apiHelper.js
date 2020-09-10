import axios from 'axios';

const apiHelper = (type, url, data, headers) => {
  // axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  // axios.defaults.headers.post['Accept'] = "application/vnd.e-commerce.v1";
  return axios({
    method: type,
    url,
    data,
    headers: headers
  });
};

export default apiHelper;
