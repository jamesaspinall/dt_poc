export const setFirstName = (firstname: string) => (
  dispatch: any,
  getState: any
) => {
  return dispatch({
    type: "SET_FIRSTNAME",
    action: firstname,
  });
};
export const setLastName = (lastname: string) => (
  dispatch: any,
  getState: any
) => {
  return dispatch({
    type: "SET_LASTNAME",
    action: lastname,
  });
};
export const setEmail = (email: string) => (dispatch: any, getState: any) => {
  return dispatch({
    type: "SET_EMAIL",
    action: email,
  });
};
