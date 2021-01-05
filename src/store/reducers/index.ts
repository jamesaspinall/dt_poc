import { combineReducers } from "redux";
import employees from "./employees";
import form from "./form";

export default combineReducers({
  employees,
  form,
});
