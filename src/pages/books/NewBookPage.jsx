import { NewBookForm } from "@components/forms";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NewBookPage = () => {
  return (
    <div className="p-2">
      New Book Page
      <hr />
      <Link to="/user/books">
        <Button className="bg-primary">Back</Button>
      </Link>
      <NewBookForm />
    </div>
  );
};
