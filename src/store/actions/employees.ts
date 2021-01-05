export const addEmployee = (
  firstname: string,
  lastname: string,
  email: string
) => (dispatch: any, getState: any) => {
  return dispatch({
    type: "ADD_EMPLOYEE",
    payload: { firstname: firstname, lastname: lastname, email: email },
  });
};

export const removeEmployee = (index: number) => (
  dispatch: any,
  getState: any
) => {
  return dispatch({
    type: "REMOVE_EMPLOYEE",
    payload: index,
  });
};
