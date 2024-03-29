import ActionTypes from "./user.actiontypes";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case ActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case ActionTypes.SIGN_IN_FAILURE:
    case ActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
