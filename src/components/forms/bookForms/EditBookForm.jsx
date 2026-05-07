import { CustomInput } from "@components/customInputs/CustomInput";
import React, { useEffect, useState } from "react";
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
  const [images, setImages] = useState([]);
  const [imageToDelete, setImageToDelete] = useState([]);
  const { form, setForm, handleOnChange } = useForm(initialState);
  const handleOnImageSelect = (e) => {
    if (e.target.files.length > 2) {
      e.target.value = "";
      return alert("Maximum limit of images are only 2.");
    }
    setImages([...e.target.files]);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (imageToDelete.includes(form.imgUrl)) {
      return alert("You cannot delete the thumbnail");
    }
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
    const formData = new FormData();
    for (const key in rest) {
      formData.append(key, rest[key]);
    }
    images.map((img) => formData.append("images", img));
    // formData.append("imageToDelete", imageToDelete);
    imageToDelete.map((img) => formData.append("imageToDelete", img));
    const books = await updateBooksAction(formData);
    navigate("/user/books");
  };
  const handleOnDeleteImage = (e) => {
    const { checked, value } = e.target;
    checked
      ? setImageToDelete([...imageToDelete, value])
      : setImageToDelete(imageToDelete.filter((img) => img !== value));
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
        <div className="m-3 d-flex">
          {form?.imageList?.map((img) => (
            <div className="m-1" key={img}>
              <Form.Check
                type="radio"
                name="imgUrl"
                value={img}
                checked={form.imgUrl === img}
                onChange={handleOnChange}
                label={"Thumbnail"}
              />
              <Form.Check
                type="checkbox"
                label="Delete"
                value={img}
                onChange={handleOnDeleteImage}
              />
              <img
                src={import.meta.env.VITE_BASE_API_URL + img.slice(6)}
                alt="Images"
                width="150px"
                className="img-thumbnail"
              />
            </div>
          ))}
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Upload more images (Max 2 photos)</Form.Label>
          <Form.Control
            type="file"
            name="image"
            multiple
            accept="image/*"
            onChange={handleOnImageSelect}
          />
        </Form.Group>
        <div className="d-grid">
          <Button type="submit">Update Book</Button>
        </div>
      </Form>
    </div>
  );
};
export default EditBookForm;
