import axios from 'axios';
import { decode } from 'jsonwebtoken';

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

export { authLogin };
