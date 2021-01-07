import React, { FC, useEffect } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { connect } from "react-redux";
import { get } from "lodash";
import { fectchAllEmployees } from "../../store/actions";

// export const data = [
//   { firstName: "James", lastName: "Aspinall", Email: "aspin@me.com" },
//   { firstName: "Kylie", lastName: "Aspinall", Email: "kylie@me.com" },
//   { firstName: "Cooper", lastName: "Aspinall", Email: "woof@me.com" },
// ];

const Table: FC = ({ employees, dispatchFetchAllEmployeeTableData }: any) => {
  const tableData = get(employees, "employees", []);
  useEffect(() => {
    dispatchFetchAllEmployeeTableData();
  }, []);

  return (
    <>
      {tableData.length === 0 ? (
        <p>No employees added. Use the form below to get started.</p>
      ) : (
        <table>
          <TableHead headings={tableData} />
          <TableBody bodydata={tableData} />
        </table>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  state: state,
  employees: state.employees,
  tableData: state.employees.allEmployeesTableData,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchFetchAllEmployeeTableData: () => dispatch(fectchAllEmployees()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
