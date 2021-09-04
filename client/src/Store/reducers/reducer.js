const initialState = {
  isAuthorized: false,

  registrationSuccess: false,

  name: "",

  email: "aaa@mail.ru",
  password: "12345",

  code: "1111",
  codeSuccess: false,
  codeResended: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isAuthorized:
          state.email == action.payload.email &&
          state.password == action.payload.password,
      };
    case "SIGN_UP":
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };

    case "EMAIL_CODE":
      return {
        ...state,
        codeSuccess: action.payload == state.code,
      };

    case "EMAIL_CODE_RESEND_STOP":
      return {
        ...state,
        codeResended: false,
      };

    case "EMAIL_CODE_RESEND":
      return {
        ...state,
        codeResended: true,
        code: Number(state.code) + 1111,
      };

    case "REGISTRATION_SUCCESS":
      return {
        ...state,
        registrationSuccess: true,
      };

    default:
      return { ...state };
  }
};
