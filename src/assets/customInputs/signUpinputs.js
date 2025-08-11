import { Placeholder } from "react-bootstrap";

export const signUpInputs = [
  {
    label: "First Name*",
    name: "fName",
    type: "text",
    required: true,
    placeholder: "John",
  },
  {
    label: "Last Name*",
    name: "lName",
    type: "text",
    required: true,
    placeholder: "Doe",
  },
  {
    label: "Email*",
    name: "email",
    type: "text",
    required: true,
    placeholder: "johndoe@gmail.com",
  },
  {
    label: "Phone",
    name: "phone",
    type: "Number",
    placeholder: "0452---",
  },
  {
    label: "Password*",
    name: "password",
    type: "password",
    required: true,
    placeholder: "*****",
  },
  {
    label: "Confirm Password*",
    name: "confirmPassword",
    type: "password",
    required: true,
    placeholder: "*****",
  },
];
