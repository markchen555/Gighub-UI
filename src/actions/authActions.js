import axios from 'axios';
import { decode } from 'jsonwebtoken';
import { push } from 'react-router-redux';

const API_SERVER = process.env.API_SERVER;

const typeDetails = {
  0: 'user',
  1: 'company',
  2: 'recruiter'
};

const authLogin = (loginObj, type) => (dispatch) => {
  axios.get(`${API_SERVER}/api/${typeDetails[type]}/login/${loginObj.username}/${loginObj.password}`)
    .then(({ data }) => {
      const decoded = decode(data, { complete: true });
      decoded.payload.type = type;
      decoded.payload.token = data;
      dispatch({ type: 'AUTH_SUCCESS', payload: decoded.payload });
    })
    .catch(err => {
      if (err && err.response !== undefined && err.response.status === 403) {
        alert(err.response.data.error);
      }
      dispatch({ type: 'AUTH_FAILED' });
    });
};

const authSignup = (signupObj, type) => (dispatch) => {
  axios.post(`${API_SERVER}/api/user/signup`, signupObj)
    .then(({ data }) => {
      const decoded = decode(data, { complete: true });
      decoded.payload.type = type;
      decoded.payload.token = data;
      dispatch({ type: 'AUTH_SUCCESS', payload: decoded.payload });
    })
    .catch((err) => {
      if (err && err.response !== undefined && err.response.status === 409) {
        alert(err.response.data.error);
      }
      dispatch({ type: 'AUTH_FAILED' });
    });
};

const companySignup = ({ username, password }, type) => (dispatch) => {
  axios.post(`${API_SERVER}/api/company/signup`, { name: username, password })
    .then(({ data }) => {
      const decoded = decode(data, { complete: true });
      decoded.payload.type = type;
      decoded.payload.token = data;
      dispatch({ type: 'AUTH_SUCCESS', payload: decoded.payload });
    })
    .catch((err) => {
      if (err && err.response !== undefined && err.response.status === 409) {
        alert(err.response.data.error);
      }
      dispatch({ type: 'AUTH_FAILED' });
    });
};

const recruiterSignup = (signupObj, type) => (dispatch) => {
  axios.post(`${API_SERVER}/api/recruiter/signup`, signupObj)
    .then(({ data }) => {
      const decoded = decode(data, { complete: true });
      decoded.payload.type = type;
      decoded.payload.token = data;
      dispatch({ type: 'AUTH_SUCCESS', payload: decoded.payload });
    })
    .catch(err => {
      if (err && err.response !== undefined && (err.response.status === 409 || err.response.status === 404)) {
        alert(err.response.data.error);
      }
      dispatch({ type: 'AUTH_FAILED' });
    });
};

const authLogout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT_SUCCESS' });
  dispatch(push('/'));
};

export { authLogin, authLogout, authSignup, companySignup, recruiterSignup };
