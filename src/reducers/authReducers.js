const initialState = {
  user: {},
  authorized: false,
  failed: false,
};

const AuthReducer = (state=initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case 'AUTH_SUCCESS': {
      return Object.assign({}, state, {
        user: payload,
        authorized: true,
      });
    }
    case 'AUTH_FAILED': {
      return Object.assign({}, state, {
        failed: true,
      });
    }
    case 'LOGOUT_SUCCESS': {
      return Object.assign({}, state, {
        user: {},
        authorized: false,
        failed: false,
      });
    }
    default: {
      return state;
    }
  }
};

export { AuthReducer };
