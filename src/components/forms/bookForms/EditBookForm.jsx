import { CustomInput } from "@components/customInputs/CustomInput";
import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { editBookInputs } from "@assets/customInputs/bookInputs";
import { Button } from "react-bootstrap";
import { useForm } from "@hooks/useForm";
import {
  postNewBookAction,
  updateBooksAction,
} from "@features/book/bookAction";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const EditBookForm = () => {
  const initialState = {
    title: "",
    author: "",
    year: "",
    isbn: "",
    imgUrl: "",
    status: "Inactive",
  };
  const { form, setForm, handleOnChange } = useForm(initialState);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const {
      addedBy,
      createdAt,
      lastUpdatedBy,
      slug,
      updatedAt,
      available,
      __v,
      ...rest
    } = form;
    const books = await updateBooksAction(rest);
    navigate("/user/books");
  };
  const { _id } = useParams();
  const { books } = useSelector((state) => state.bookInfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (_id !== form._id) {
      const selectedBook = books.find((book) => book._id === _id);
      if (selectedBook?._id) {
        setForm({
          ...selectedBook,
          status: selectedBook.status === "Active" ? "Active" : "Inactive",
        });
      } else {
        navigate("/user/books");
      }
    }
  }, [setForm]);
  return (
    <div className="p-4">
      <h3>Insert new book details</h3>
      <hr />
      <Form className="m-2" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Check
            type="switch"
            name="status"
            id="custom-switch"
            label={form.status}
            onChange={handleOnChange}
            checked={form.status === "Active"}
          />
        </Form.Group>
        {editBookInputs.map((input) => (
          <CustomInput
            key={input.name}
            {...input}
            onChange={handleOnChange}
            value={form[input.name] || ""}
          />
        ))}
        <div className="d-grid">
          <Button type="submit">Update Book</Button>
        </div>
      </Form>
    </div>
  );
};
export default EditBookForm;
