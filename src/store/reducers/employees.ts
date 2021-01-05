const initialState = {
  employees: [],
};

const reducer = (state = initialState, action: any = {}) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case "REMOVE_EMPLOYEE":
      return {
        ...state,
        employees: [
          ...state.employees.slice(0, action.payload),
          ...state.employees.slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
};
export default reducer;
