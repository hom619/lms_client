import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const BooksTable = () => {
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
          {displayBooks.map(({ _id, status, title, imgUrl }, i) => (
            <tr key={_id}>
              <td>{i + 1}</td>
              <td
                className={status === "active" ? "text-success" : "text-danger"}
              >
                {status}
              </td>
              <td>
                <img src={imgUrl} alt="" width="60px" />
              </td>
              <td>{title}</td>
              <td>Yes, No: Available data</td>
              <td>
                <Link to="/user/edit-book">
                  <Button variant="warning">Edit</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
