import axios from 'axios';

const API_SERVER = process.env.API_SERVER;

const authLogin = (loginObj) => (dispatch) => {
  axios.post(`${API_SERVER}/api/`)
    .then(({ headers }) => {
      console.log('headers: ', headers);
      // dispatch({ type: 'LOGIN_SUCCESS', payload: headers.JWT });
    })
    .catch(err => {
      dispatch({ type: 'LOGIN_FAILED' });
    });
};

export { authLogin };
