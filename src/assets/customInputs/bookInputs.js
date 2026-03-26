import { Row } from "react-bootstrap";

export const newBookInputs = [
  {
    label: "Title",
    name: "title",
    type: "text",
    required: true,
    placeholder: "Theory of time",
  },
  {
    label: "Year",
    name: "year",
    type: "number",
    min: "1901",
    max: new Date().getFullYear(),
    required: true,
    placeholder: "1995",
  },
  {
    label: "Author",
    name: "author",
    type: "text",
    required: true,
    placeholder: "Stephen Hawking",
  },
  {
    label: "Image Url",
    name: "imgUrl",
    type: "url",
    placeholder: "http://localhost:5173/user/new-book",
  },
  {
    label: "ISBN",
    name: "isbn",
    type: "number",
    required: true,
    placeholder: "1234567890",
  },
  {
    label: "Genre",
    name: "genre",
    type: "text",
    required: true,
    placeholder: "Quantom Physics",
  },
  {
    label: "Description",
    name: "description",
    type: "text",
    as: "textarea",
    rows: 5,
    required: true,
    placeholder: "Theory about black holes and time",
  },
];
