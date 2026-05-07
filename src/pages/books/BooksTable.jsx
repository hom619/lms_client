import { deleteBookAction } from "@features/book/bookAction";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
export const BooksTable = () => {
  const navigate = useNavigate();
  const { books } = useSelector((state) => state.bookInfo);
  const [displayBooks, setDisplayBooks] = useState([]);
  const handleOnSearch = (e) => {
    const { value } = e.target;
    const tempBooks = books.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase()),
    );
    setDisplayBooks(tempBooks);
  };
  useEffect(() => {
    setDisplayBooks(books);
  }, [books]);

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
        <div>{displayBooks.length} Book(s) found</div>
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
            <th>IS Available</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayBooks.map(
            (
              { _id, status, title, imgUrl, available, expectedAvailable },
              i,
            ) => (
              <tr key={_id}>
                <td>{i + 1}</td>
                <td
                  className={
                    status === "Active" ? "text-success" : "text-danger"
                  }
                >
                  {status}
                </td>
                <td>
                  <img
                    src={import.meta.env.VITE_BASE_API_URL + imgUrl.slice(6)}
                    alt=""
                    width="60px"
                  />
                </td>
                <td>{title}</td>
                <td>
                  {available
                    ? "Yes"
                    : !available && expectedAvailable
                      ? "From: " + expectedAvailable.slice(0, 10)
                      : "N/A"}
                </td>
                <td>
                  <Link to={"/user/edit-book/" + _id}>
                    <Button variant="warning" className="m-2">
                      Edit
                    </Button>
                  </Link>
                  <Button variant="danger" onClick={() => handleOnDelete(_id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </Table>
    </div>
  );
};
