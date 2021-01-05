const initialState = {
  firstname: "",
  lastname: "",
  email: "",
};

const reducer = (state = initialState, action: any = {}) => {
  switch (action.type) {
    case "SET_FIRSTNAME":
      return {
        ...state,
        firstname: action.firstname,
      };
    case "SET_LASTNAME":
      return {
        ...state,
        lastname: action.lastname,
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
