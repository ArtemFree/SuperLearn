const initialState = {
  name: "",
  email: "",
  password: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };

    default:
      return { ...state };
  }
};
