import { React, useEffect } from "react";
import { Button } from "react-bootstrap";
import { BooksTable } from "./BooksTable";
import { getAllBooksAdminAction } from "@features/book/bookAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooksAdminAction());
  }, [dispatch]);
  return (
    <div className="p-3">
      <h3>Books</h3>
      <hr />
      <div className="text-end mb-2">
        <Link to="/user/new-book">
          <Button>Add Book</Button>
        </Link>
      </div>
      <BooksTable />
    </div>
  );
};
