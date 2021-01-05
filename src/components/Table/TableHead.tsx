import React, { FC } from "react";

const TableHead: FC<any> = ({ headings }) => {
  return (
    <>
      <thead>
        <tr>
          {/* {headings &&
            Object.keys(headings[0]).map((key) => <th key={key}>{key}</th>)} */}
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
