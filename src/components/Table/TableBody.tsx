import React from "react";
import TableRow from "./TableRow";
const TableBody = ({ bodydata }: any) => {
  return (
    <>
      <tbody>
        <TableRow data={bodydata} />
      </tbody>
    </>
  );
};

export default TableBody;
