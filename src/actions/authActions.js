import axios from 'axios';
import { decode } from 'jsonwebtoken';
import { push } from 'react-router-redux';

const API_SERVER = process.env.API_SERVER;

const authLogin = (loginObj) => (dispatch) => {
  axios.get(`${API_SERVER}/api/user/login/${loginObj.username}/${loginObj.password}`)
    .then(({ data }) => {
      const decoded = decode(data, { complete: true });
      dispatch({ type: 'LOGIN_SUCCESS', payload: decoded.payload });
    })
    .catch(err => {
      dispatch({ type: 'LOGIN_FAILED' });
    });
};

const authLogout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT_SUCCESS' });
  dispatch(push('/'));
};

export { authLogin, authLogout };
