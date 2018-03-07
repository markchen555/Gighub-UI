import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import { AuthReducer as auth } from './authReducers';

const Reducer = combineReducers({
  auth,
  router,
});

export { Reducer };
