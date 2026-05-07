import { CustomInput } from "@components/customInputs/CustomInput";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { newBookInputs } from "@assets/customInputs/bookInputs";
import { Button } from "react-bootstrap";
import { useForm } from "@hooks/useForm";
import { postNewBookAction } from "@features/book/bookAction";

export const NewBookForm = () => {
  const initialState = {};
  const { form, setForm, handleOnChange } = useForm(initialState);
  const [image, setImage] = useState(null);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    formData.append("image", image);
    postNewBookAction(formData);
  };
  const handleOnImageSelect = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div className="p-4">
      <h3>Insert new book details</h3>
      <Form className="m-2" onSubmit={handleOnSubmit}>
        {newBookInputs.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}
        <Form.Group className="mb-3">
          <Form.Control
            type="file"
            name="image"
            onChange={handleOnImageSelect}
          />
        </Form.Group>
        <div className="d-grid">
          <Button type="submit">Add New Book</Button>
        </div>
      </Form>
    </div>
  );
};
export default NewBookForm;
