import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
require("dotenv").config();

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  release: "dt_poc@" + process.env.npm_package_version,
  autoSessionTracking: true,
  integrations: [new Integrations.BrowserTracing()],
  maxBreadcrumbs: 20,
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
