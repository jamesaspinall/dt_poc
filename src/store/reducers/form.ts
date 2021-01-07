const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

const reducer = (state = initialState, action: any = {}) => {
  switch (action.type) {
    case "SET_firstName":
      return {
        ...state,
        firstName: action.firstName,
      };
    case "SET_lastName":
      return {
        ...state,
        lastName: action.lastName,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.email,
      };
    default:
      return state;
  }
};
export default reducer;
