import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addEmployee,
  setFirstName,
  setLastName,
  setEmail,
} from "../../store/actions";
const Form = ({
  dispatchAddEmployee,
  dispatchSetFirstName,
  dispatchSetLastName,
  dispatchSetEmail,
}: any) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatchAddEmployee(employee.firstname, employee.lastname, employee.email);
    setEmployee({
      firstname: "",
      lastname: "",
      email: "",
    });
  };
  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    email: "",
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
          name="firstname"
          value={employee.firstname}
          type="text"
          onChange={handleChange}
          onBlur={(e) => dispatchSetFirstName(e.target.value)}
        />
      </div>
      <div className="flex_input">
        <p>Last Name</p>
        <input
          name="lastname"
          value={employee.lastname}
          type="text"
          onChange={handleChange}
          onBlur={(e) => dispatchSetLastName(e.target.value)}
        />
      </div>
      <div className="flex_input">
        <p>Email</p>
        <input
          name="email"
          value={employee.email}
          type="email"
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
    dispatchAddEmployee: (firstname: string, lastname: string, email: string) =>
      dispatch(addEmployee(firstname, lastname, email)),

    dispatchSetFirstName: (firstname: string) =>
      dispatch(setFirstName(firstname)),

    dispatchSetLastName: (lastname: string) => dispatch(setLastName(lastname)),

    dispatchSetEmail: (email: string) => dispatch(setEmail(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
