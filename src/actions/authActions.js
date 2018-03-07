import axios from 'axios';
import { decode } from 'jsonwebtoken';
import { push } from 'react-router-redux';

const API_SERVER = process.env.API_SERVER;

const authLogin = (loginObj) => (dispatch) => {
  axios.get(`${API_SERVER}/api/user/login/${loginObj.username}/${loginObj.password}`)
    .then(({ data }) => {
      const decoded = decode(data, { complete: true });
      dispatch({ type: 'AUTH_SUCCESS', payload: decoded.payload });
    })
    .catch(err => {
      if (err && err.response.status === 403) {
        alert(err.response.data.error);
      }
      dispatch({ type: 'AUTH_FAILED' });
    });
};

const authSignup = (signupObj) => (dispatch) => {
  axios.post(`${API_SERVER}/api/user/signup`)
    .then(({ data }) => {
      const decoded = decode(data, { complete: true });
      dispatch({ type: 'AUTH_SUCCESS', payload: decoded.payload });
    })
    .catch(err => {
      if (err && err.response.status === 409) {
        alert(err.response.data.error);
      }
      dispatch({ type: 'AUTH_FAILED '});
    });
};

const authLogout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT_SUCCESS' });
  dispatch(push('/'));
};

export { authLogin, authLogout };
