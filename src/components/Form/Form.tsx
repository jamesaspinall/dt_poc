import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addEmployee,
  setfirstName,
  setlastName,
  setEmail,
} from "../../store/actions";
const Form = ({
  dispatchAddEmployee,
  dispatchSetfirstName,
  dispatchSetlastName,
  dispatchSetEmail,
}: any) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatchAddEmployee(employee);
    setEmployee({
      firstName: "",
      lastName: "",
      email: "",
      isActive: "true",
      id: "",
    });
  };
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isActive: "true",
    id: "",
  });

  const handleChange = (event: any) => {
    const value = event.target.value;

    setEmployee({
      ...employee,
      [event.target.name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex_input">
        <p>First Name</p>
        <input
          name="firstName"
          value={employee.firstName}
          type="text"
          onChange={handleChange}
          onBlur={(e) => dispatchSetfirstName(e.target.value)}
        />
      </div>
      <div className="flex_input">
        <p>Last Name</p>
        <input
          name="lastName"
          value={employee.lastName}
          type="text"
          onChange={handleChange}
          onBlur={(e) => dispatchSetlastName(e.target.value)}
        />
      </div>
      <div className="flex_input">
        <p>Email</p>
        <input
          name="email"
          value={employee.email}
          type="text"
          onChange={handleChange}
          onBlur={(e) => dispatchSetEmail(e.target.value)}
        />
      </div>
      <button className="submit_button" type="submit">
        Add Employee
      </button>
    </form>
  );
};
const mapStateToProps = (state: any) => ({
  state: state,
  employees: state.employees,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchAddEmployee: (data: {
      firstName: string;
      lastName: string;
      email: string;
      isActive: string;
    }) => dispatch(addEmployee(data)),

    dispatchSetfirstName: (firstName: string) =>
      dispatch(setfirstName(firstName)),

    dispatchSetlastName: (lastName: string) => dispatch(setlastName(lastName)),

    dispatchSetEmail: (email: string) => dispatch(setEmail(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
