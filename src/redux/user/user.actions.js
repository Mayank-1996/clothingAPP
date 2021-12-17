import ActionTypes from "./user.actiontypes";

export const setCurrentUser = (user) => ({
  type: ActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: ActionTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => {
  console.log(user);
  return {
    type: ActionTypes.SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signInFailure = (error) => ({
  type: ActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: ActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: ActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: ActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: ActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: ActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});
export const signUpStart = (emailAndPassword) => {
  //   console.log(emailAndPassword);
  return {
    type: ActionTypes.SIGN_UP_START,
    payload: emailAndPassword,
  };
};
export const signUpSuccess = () => ({
  type: ActionTypes.SIGN_UP_SUCCESS,
});
export const signUpFailure = (error) => {
  //   console.log(error);
  return {
    type: ActionTypes.SIGN_UP_FAILURE,
  };
};
