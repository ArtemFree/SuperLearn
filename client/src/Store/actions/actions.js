export const signup = (userData) => {
  return {
    type: "SIGN_UP",
    payload: userData,
  };
};
