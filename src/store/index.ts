import rootReducer from "./reducers";
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import * as Sentry from "@sentry/react";
const middlewares = [];
middlewares.push(thunk);

const sentryReduxEnhancer = Sentry.createReduxEnhancer({
  // Optionally pass options
});

if (process.env.NODE_ENV !== "production") {
  const logger = createLogger({
    collapsed: true,
    duration: true,
  });
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), sentryReduxEnhancer)
);
