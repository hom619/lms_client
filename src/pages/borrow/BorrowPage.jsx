import React from "react";
import { BorrowsTable } from "./BorrowsTable";
export const BorrowPage = ({ isAdmin }) => {
  return (
    <div className="p-3">
      <h3>{isAdmin ? "All Borrows History" : "My borrows List"}</h3>
      <hr />
      <div className="all-borrow-table"></div>
      <BorrowsTable isAdmin={isAdmin}></BorrowsTable>
    </div>
  );
};
