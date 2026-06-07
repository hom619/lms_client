import { deleteBookAction } from "@features/book/bookAction";
import { getAllBorrowsAction } from "@features/borrow/borrowAction";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
export const BorrowsTable = ({ isAdmin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allBorrows, myBorrows } = useSelector((state) => state.borrowInfo);
  const handleOnSearch = (e) => {
    const { value } = e.target;
    const tempBooks = books.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase()),
    );
    setDisplayBooks(tempBooks);
  };
  useEffect(() => {
    dispatch(getAllBorrowsAction(isAdmin));
  }, [dispatch, isAdmin]);
  const borrowList = isAdmin ? allBorrows : myBorrows;

  const handleOnDelete = async (_id) => {
    if (confirm("Are you sure you want to delete this book?")) {
      const result = await deleteBookAction(_id);
      const tempBookList = displayBooks.filter((book) => book._id != _id);
      setDisplayBooks(tempBookList);
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>{borrowList.length} Borrow(s) found</div>
        <div>
          <Form.Control placeholder="Search Here" onChange={handleOnSearch} />
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Due</th>
            <th>Returned Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {borrowList.map(
            (
              { _id, thumbnail, bookTitle, dueDate, isReturned, returnedDate },
              i,
            ) => (
              <tr key={_id}>
                <td>{i + 1}</td>
                <td>TODO</td>
                <td>
                  <img
                    src={import.meta.env.VITE_BASE_API_URL + thumbnail.slice(6)}
                    alt=""
                    width="60px"
                  />
                </td>
                <td>{bookTitle}</td>
                <td>{dueDate.slice(0, 10)}</td>
                <td>{isReturned ? returnedDate : "Not returned"}</td>
                <td>
                  <div className="d-flex justify-content-center align-items-center">
                    {" "}
                    <div>
                      <Link to={"/user/edit-book/" + _id}>
                        <Button variant="warning" className="m-2">
                          Return
                        </Button>
                      </Link>
                    </div>
                    <div>
                      {" "}
                      <Button
                        variant="primary"
                        onClick={() => handleOnDelete(_id)}
                      >
                        Review
                      </Button>
                    </div>
                  </div>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </Table>
    </div>
  );
};
