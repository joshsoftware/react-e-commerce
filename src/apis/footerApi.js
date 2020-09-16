import axios from 'axios';

const getFooterListApi = () => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1'
  };
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_SERVER_URL}footer`,
    headers: headers
  });
};

export { getFooterListApi };
