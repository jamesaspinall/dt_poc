import React, { FC } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { connect } from "react-redux";
import { get } from "lodash";
export const data = [
  { Firstname: "James", Lastname: "Aspinall", Email: "aspin@me.com" },
  { Firstname: "Kylie", Lastname: "Aspinall", Email: "kylie@me.com" },
  { Firstname: "Cooper", Lastname: "Aspinall", Email: "woof@me.com" },
];

const Table: FC = ({ employees }: any) => {
  const tableData = get(employees, "employees", []);

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
});

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     dispatchAddEmployee: (firstname: string, lastname: string, email: string) =>
//       dispatch(addEmployee(firstname, lastname, email)),
//   };
// };

export default connect(mapStateToProps)(Table);
