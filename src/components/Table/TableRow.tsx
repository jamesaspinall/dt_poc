import React from "react";
import { removeEmployee } from "../../store/actions";
import { connect } from "react-redux";
const TableRow = ({ data, dispatchRemoveEmployee }: any) => {
  return (
    <>
      {data &&
        data.map((data: any, index: any) => (
          <tr key={index}>
            <td>{data.firstname}</td>
            <td>{data.lastname}</td>
            <td>{data.email}</td>
            <td
              onClick={() => {
                dispatchRemoveEmployee(index);
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
