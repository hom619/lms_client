import React from "react";
import { CustomInput } from "../../components/customInputs/CustomInput";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signUpInputs } from "../../assets/customInputs/signUpinputs";

export const SignUpPage = () => {
  return (
    <div className="d-flex justify-content-center">
      <Form style={{ width: "450px" }} className="card p-3 mt-5 shadow-lg">
        <h3 className="mb-4">Join our Library Community</h3>
        {signUpInputs.map((input) => (
          <CustomInput key={input.name} {...input} />
        ))}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
