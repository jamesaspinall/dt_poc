import "./App.css";
import { connect } from "react-redux";
import { Table } from "./components/Table";
import Form from "./components/Form/Form";
import { addEmployee } from "./store/actions";
import * as Sentry from "@sentry/react";
function App({ employees, dispatchAddEmployee }: any) {
  return (
    <div className="App">
      <h1 style={{ marginBottom: 10 }}>Distributed Tracing POC</h1>
      {/* <button onClick={methodDoesNotExist}>Break the world</button>; */}
      <Table />
      <Form />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  state: state,
  employees: state.employees,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchAddEmployee: (firstname: string, lastname: string, email: string) =>
      dispatch(addEmployee(firstname, lastname, email)),
  };
};

export default Sentry.withProfiler(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
