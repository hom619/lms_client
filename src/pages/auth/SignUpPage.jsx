import React from "react";
import { CustomInput } from "../../components/customInputs/CustomInput";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signUpInputs } from "../../assets/customInputs/signUpinputs";
import { useForm } from "../../hooks/useForm";
import { signUpApi } from "../../services/authApi";
export const SignUpPage = () => {
  const initialState = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };
  const { form, setForm, handleOnChange, passwordErrors } =
    useForm(initialState);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) return alert("Password Don't match");
    const result = await signUpApi(form);

    console.log(result);
    setForm(initialState);
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
          <CustomInput
            onChange={handleOnChange}
            value={form[input.name] || ""}
            key={input.name}
            {...input}
          />
        ))}
        <div className="py-1">
          <ul className="text-danger">
            {passwordErrors.length > 0 &&
              passwordErrors.map((error) => <li key={error}>{error}</li>)}
          </ul>
        </div>
        <Button
          variant="primary"
          type="submit"
          disabled={passwordErrors.length}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
