import * as Sentry from "@sentry/react";
import { create } from "apisauce";
interface IEmployee {
  firstName: string;
  lastName: string;
  email: string;
  isActive: string;
}

const api = create({
  baseURL: "http://34.220.1.118:3000",
});

export const fectchAllEmployees = () => (dispatch: any, getState: any) => {
  const transaction = Sentry.startTransaction({
    name: "FE - Transaction : Inside GET_ALL_EMPLOYEES",
  });
  const span = transaction.startChild({
    op: "FE - Span : Inside GET_ALL_EMPLOYEES",
    description: `GET`,
  });

  Sentry.configureScope((scope) => {
    scope.setTag("transaction_id", transaction.traceId);
  });

  const runAsync = async () => {
    api.setHeaders({
      "Sentry-Trace": span.traceId,
      Accept: "*/*",
    });
    const res = await api.get(`/`);
    const { data } = res;

    if (res.ok) {
      dispatch({
        type: "SET_ALL_EMPLOYEES_TABLE_DATA",
        payload: data,
      });
      span.setTag("Response Status Code:", res.status);
      span.setData("FE - Span : Inside GET_ALL_EMPLOYEES", data);
      span.finish();
      transaction.finish();
    }
    if (res.problem) {
      Sentry.captureException(res);
      console.error("API ERROR:", res.problem);
    }
  };
  runAsync();
};

export const addEmployee = (body: IEmployee) => (dispatch: any) => {
  const runAsync = async () => {
    const transaction = Sentry.startTransaction({
      name: "FE - Transaction : Inside POST_NEW_EMPLOYEE",
    });
    const span = transaction.startChild({
      op: "FE - Span : Inside POST_NEW_EMPLOYEE",
      description: `POST`,
    });
    api.setHeaders({
      "Sentry-Trace": span.traceId,
      Accept: "*/*",
    });
    const res = await api.post(`/`, body);
    const { data } = res;
    span.setTag("Response Status Code:", res.status);
    span.setData("FE - Span : Inside POST_NEW_EMPLOYEE", data);
    span.finish();
    transaction.finish();
    if (res.ok) {
      dispatch({
        type: "ADD_EMPLOYEE",
        payload: {
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
        },
      });
    }
    if (res.problem) {
      Sentry.captureException(res);
      console.error("API ERROR:", res.problem);
    }
  };
  runAsync();
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

export const deleteEmployee = (body: IEmployee) => (
  dispatch: any,
  getState: any
) => {
  const runAsync = async () => {
    const transaction = Sentry.startTransaction({
      name: "FE - Transaction : Inside PUT_DELETE_EMPLOYEE",
    });
    const span = transaction.startChild({
      op: "FE - Span : Inside PUT_DELETE_EMPLOYEE",
      description: `PUT`,
    });

    api.setHeaders({
      "Sentry-Trace": span.traceId,
      Accept: "*/*",
    });
    const res = await api.put(`/`, body);
    const { data } = res;
    if (res.ok) {
      span.setTag("Response Status Code:", res.status);
      span.setData("FE - Span: Inside PUT_DELETE_EMPLOYEE", data);
      span.finish();
      transaction.finish();
    }
    if (res.problem) {
      Sentry.captureException(res);
      console.error("API ERROR:", res.problem);
    }
  };
  runAsync();
};
