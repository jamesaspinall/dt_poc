import * as Sentry from "@sentry/react";
interface IEmployee {
  firstName: string;
  lastName: string;
  email: string;
  isActive: string;
}

export const fectchAllEmployees = () => (dispatch: any, getState: any) => {
  console.log("I RAN!");
  const transaction = Sentry.startTransaction({
    name: "test-transaction-JAMES",
  });
  const span = transaction.startChild({
    op: "fectchAllEmployees",
    description: `GET`,
  }); // This function returns a Span
  const runAsync = async () => {
    const apiResponse = await fetch("http://34.220.1.118:3000/", {
      method: "GET",
      headers: {
        Accept: "*/*",
      },
    });
    span.setTag("Response Status Code:", apiResponse.status);
    const tableData = await apiResponse.json();
    span.setData("AllEmployeeData", tableData);
    span.finish();
    console.log(tableData);
    dispatch({
      type: "SET_ALL_EMPLOYEES_TABLE_DATA",
      payload: tableData,
    });
  };
  runAsync();
};

export const addEmployee = (data: IEmployee) => (
  dispatch: any,
  getState: any
) => {
  const runAsync = async () => {
    const apiResponse = await fetch("http://34.220.1.118:3000/", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const tableData = await apiResponse;
    console.log(tableData);
  };
  runAsync();
  return dispatch({
    type: "ADD_EMPLOYEE",
    payload: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    },
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

export const deleteEmployee = (data: IEmployee) => (
  dispatch: any,
  getState: any
) => {
  const runAsync = async () => {
    const apiResponse = await fetch("http://34.220.1.118:3000/", {
      method: "PUT",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const tableData = await apiResponse;
    console.log(tableData);
  };
  runAsync();
};
