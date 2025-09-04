import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useForm } from "../../hooks/useForm";
import { signInUserApi } from "../../services/authApi";
import { CustomInput } from "../../components/customInputs/CustomInput";
export const SignInPage = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const { form, handleOnChange } = useForm(initialState);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      const { payload } = await signInUserApi(form);
      localStorage.setItem("refreshJWT", payload.refreshJWT);
      sessionStorage.setItem("accessJWT", payload.accessJWT);
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <div className="sign-in-page d-flex justify-content-center align-items-center">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Welcome Back to our Library</Card.Title>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              required
              placeholder="john@email.com"
              onChange={handleOnChange}
            />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              required
              placeholder="********"
              onChange={handleOnChange}
            />
            <div className="d-grid">
              <Button type="submit">Sign In</Button>
            </div>
          </Form>
          <div className="text-end my-3">
            Forgot Password?<a href="/forgot-password">Reset Now</a>{" "}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
