import axios from 'axios';
import apiHelper from './apiHelper';

export const getUserListApi = (token) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_SERVER_URL}users`,
    headers: headers
  });
};

export const deleteUserApi = ({ token, user_id }) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return axios({
    method: 'delete',
    url: `${process.env.REACT_APP_SERVER_URL}user/${user_id}`,
    headers: headers
  });
};

export const enableUserApi = ({ token, user_id }) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return axios({
    method: 'patch',
    url: `${process.env.REACT_APP_SERVER_URL}user/enable/${user_id}`,
    headers: headers
  });
};

export const disableUserApi = ({ token, user_id }) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  return axios({
    method: 'patch',
    url: `${process.env.REACT_APP_SERVER_URL}user/disable/${user_id}`,
    headers: headers
  });
};

export const userInvite = (email, token) => {
  const headers = {
    Accept: 'application/vnd.e-commerce.v1',
    Token: token
  };
  let email_ar = [];
  email_ar.push(email);
  return apiHelper(
    'post',
    `${process.env.REACT_APP_SERVER_URL}invite`,
    {
      email: email_ar
    },
    headers
  );
};
