import { deleteBookAction } from "@features/book/bookAction";
import {
  getAllBorrowsAction,
  returnBorrowAction,
} from "@features/borrow/borrowAction";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
export const BorrowsTable = ({ isAdmin }) => {
  const [displayBooks, setDisplayBooks] = useState([]);
  const [borrowList, setBorrowList] = useState([]);
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();
  const { allBorrows, myBorrows } = useSelector((state) => state.borrowInfo);
  const handleOnSearch = (e) => {
    const { value } = e.target;
    const tempBooks = borrowList.filter((borrow) =>
      borrow.bookTitle.toLowerCase().includes(value.toLowerCase()),
    );
    setDisplayBooks(tempBooks);
  };

  // 1. Fetch data on mount
  useEffect(() => {
    dispatch(getAllBorrowsAction(isAdmin));
  }, [dispatch, isAdmin]);

  // 2. Sync displayBooks and borrowList when Redux state updates
  useEffect(() => {
    const list = isAdmin ? allBorrows : myBorrows;
    setBorrowList(list);
    setDisplayBooks(list);
  }, [allBorrows, myBorrows, isAdmin]);

  const handleOnReturn = (_id) => {
    if (confirm("Are you sure you want to return this book?"))
      dispatch(returnBorrowAction({ _id }));
  };
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>{displayBooks?.length} Borrow(s) found</div>
        <div>
          <Form.Control placeholder="Search Here" onChange={handleOnSearch} />
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            {!path.includes("my-borrow") && <th>Status</th>}
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Due</th>
            <th>Returned Date</th>
            {!path.includes("borrow-history") && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {displayBooks?.map(
            (
              {
                _id,
                thumbnail,
                bookTitle,
                bookSlug,
                dueDate,
                isReturned,
                returnedDate,
                reviewId,
              },
              i,
            ) => (
              <tr key={_id}>
                <td>{i + 1}</td>
                {!path.includes("my-borrow") && (
                  <td>
                    {isReturned ? "Returned" : "Borrowed"}
                    {reviewId && " & left a review"}
                  </td>
                )}
                <td>
                  <img
                    src={import.meta.env.VITE_BASE_API_URL + thumbnail.slice(6)}
                    alt=""
                    width="60px"
                  />
                </td>
                <td>
                  <a href={`/books/${bookSlug}`} target="_blank">
                    {bookTitle}
                  </a>
                </td>
                <td>{dueDate.slice(0, 10)}</td>
                <td>
                  {isReturned ? returnedDate.slice(0, 10) : "Not returned"}
                </td>

                {!path.includes("borrow-history") && (
                  <td>
                    {!isReturned && (
                      <Button
                        onClick={() => handleOnReturn(_id)}
                        variant="warning"
                        className="m-2"
                      >
                        Return
                      </Button>
                    )}
                    {isReturned && !reviewId && (
                      <Button variant="success">Leave Review</Button>
                    )}

                    {reviewId && "Reviewed"}
                  </td>
                )}
              </tr>
            ),
          )}
        </tbody>
      </Table>
    </div>
  );
};
