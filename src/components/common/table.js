import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ data, onSort, sortColom, columns }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColom={sortColom} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
