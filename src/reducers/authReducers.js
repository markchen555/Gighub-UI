const initialState = {
  user: {},
  authorized: false,
  failed: false,
};

const AuthReducer = (state=initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      return Object.assign({}, state, {
        user: payload,
        authorized: true,
      });
    }
    case 'LOGIN_FAILED': {
      return Object.assign({}, state, {
        failed: true,
      });
    }
    default: {
      return state;
    }
  }
};

export { AuthReducer };
