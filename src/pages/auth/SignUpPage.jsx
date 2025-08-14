import React from "react";
import { CustomInput } from "../../components/customInputs/CustomInput";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signUpInputs } from "../../assets/customInputs/signUpinputs";
import { useForm } from "../../hooks/useForm";
import { signUpApi } from "../../services/authApi";
export const SignUpPage = () => {
  const initialState = {};
  const { form, setForm, handleOnChange } = useForm(initialState);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) return alert("Password Don't match");
    const result = await signUpApi(form);
    console.log(result);
  };
  return (
    <div className="d-flex justify-content-center">
      <Form
        onSubmit={handleOnSubmit}
        style={{ width: "450px" }}
        className="card p-3 mt-5 shadow-lg"
      >
        <h3 className="mb-4">Join our Library Community</h3>
        {signUpInputs.map((input) => (
          <CustomInput onChange={handleOnChange} key={input.name} {...input} />
        ))}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
