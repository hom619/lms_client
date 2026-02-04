import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useRef, useState } from "react";
import { CustomInput } from "@components/customInputs/CustomInput";
import { useForm } from "../../hooks/useForm";
import { requestOTPApi, resetPasswordApi } from "../../services/authApi";
import { useNavigate } from "react-router-dom";
export const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const initialState = {};
  const { form, setForm, passwordErrors, handleOnChange } =
    useForm(initialState);
  const emailRef = useRef("");
  const [showPasswordRestForm, setShowPasswordRestForm] = useState(false);
  const [isOTPpending, setIsOTPpending] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isOTPbuttonDisabled, setIsOTPbuttonDisabled] = useState(false);
  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsOTPbuttonDisabled(false);
    }
  }, [counter]);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsOTPbuttonDisabled(true);
    setIsOTPpending(true);
    const email = emailRef.current.value;
    const response = await requestOTPApi({ email });
    setIsOTPpending(false);
    setCounter(10);
    setShowPasswordRestForm(true);
    // Add your logic to handle OTP request here
  };
  const handleOnPasswordResetSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const payload = {
      email,
      password: form.password,
      otp: form.otp,
    };
    const response = await resetPasswordApi(payload);
    if (response?.status === "success") {
      setTimeout(() => navigate("/signin"), 3000);
    }
  };

  return (
    <div className="sign-in-page d-flex justify-content-center align-items-center">
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title>Forgot Password?</Card.Title>
          <p>Please enter your email to send OTP to reset your password.</p>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              required
              placeholder="john@email.com"
              passRef={emailRef}
            />
            <div className="d-grid">
              <Button type="submit" disabled={isOTPbuttonDisabled}>
                {isOTPpending ? (
                  <Spinner variant="border" />
                ) : counter > 0 ? (
                  `Request OTP in ${counter}`
                ) : (
                  "Request OTP"
                )}
              </Button>
            </div>
          </Form>
          <hr />
          {showPasswordRestForm && (
            <div>
              <Alert variant="success">
                An OTP has been sent to your email. You will recieve the OTP if
                the email is registered in our system. Please check your
                junk/spam folder if not found in your inbox.
              </Alert>
              <Form onSubmit={handleOnPasswordResetSubmit}>
                <CustomInput
                  label="OTP"
                  name="otp"
                  type="number"
                  required
                  placeholder="1234"
                  onChange={handleOnChange}
                />
                <CustomInput
                  label="New Password "
                  name="password"
                  type="password"
                  required
                  placeholder="*******"
                  onChange={handleOnChange}
                />
                <CustomInput
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  required
                  placeholder="*******"
                  onChange={handleOnChange}
                />
                <div className="py-1">
                  <ul className="text-danger">
                    {passwordErrors.length > 0 &&
                      passwordErrors.map((error) => (
                        <li key={error}>{error}</li>
                      ))}
                  </ul>
                </div>
                <div className="d-grid">
                  <Button type="submit">Reset Password</Button>
                </div>
              </Form>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
