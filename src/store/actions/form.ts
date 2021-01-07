export const setfirstName = (firstName: string) => (
  dispatch: any,
  getState: any
) => {
  return dispatch({
    type: "SET_firstName",
    action: firstName,
  });
};
export const setlastName = (lastName: string) => (
  dispatch: any,
  getState: any
) => {
  return dispatch({
    type: "SET_lastName",
    action: lastName,
  });
};
export const setEmail = (email: string) => (dispatch: any, getState: any) => {
  return dispatch({
    type: "SET_EMAIL",
    action: email,
  });
};
