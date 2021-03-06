import React from "react";
import { removeEmployee, deleteEmployee } from "../../store/actions";
import { connect } from "react-redux";

interface IEmployee {
  firstName: string;
  lastName: string;
  email: string;
  isActive: string;
}

const TableRow = ({
  employees,
  data,
  dispatchRemoveEmployee,
  dispatchDeleteEmployee,
}: any) => {
  return (
    <>
      {data &&
        data.map((data: any, index: any) => (
          <tr key={index}>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.email}</td>
            <td
              onClick={() => {
                data.isActive = "false";

                dispatchRemoveEmployee(index);
                dispatchDeleteEmployee(data);
              }}
              style={{
                paddingLeft: 10,
                color: "red",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              X
            </td>
          </tr>
        ))}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  state: state,
  employees: state.employees,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchRemoveEmployee: (index: number) => dispatch(removeEmployee(index)),
    dispatchDeleteEmployee: (data: IEmployee) => dispatch(deleteEmployee(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
