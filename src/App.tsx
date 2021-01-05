import "./App.css";
import { Table } from "./components/Table";
import Form from "./components/Form/Form";
import * as Sentry from "@sentry/react";
function App() {
  return (
    <Sentry.ErrorBoundary fallback={"An error has occurred"}>
      <div className="App">
        <h1 style={{ marginBottom: 10 }}>Distributed Tracing POC</h1>
        <Table />
        <Form />
      </div>
    </Sentry.ErrorBoundary>
  );
}

export default Sentry.withProfiler(App);
