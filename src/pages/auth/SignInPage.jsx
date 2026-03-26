import { useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin, fetchUserAction } from "@features/userAction";
import { signInUserApi } from "@services/authApi";
import { CustomInput } from "@components/customInputs/CustomInput";
export const SignInPage = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const showLoaderRef = useRef(true);
  const { form, handleOnChange } = useForm(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location?.state?.from ?? "/user";
  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    user?._id ? navigate(path) : dispatch(autoLogin());
    if (
      sessionStorage.getItem("accessJWT") ||
      localStorage.getItem("refreshJWT")
    ) {
      setTimeout(() => {
        showLoaderRef.current = false;
      }, 2000);
    } else {
      showLoaderRef.current = false;
    }
  }, [user?._id, navigate, dispatch]);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      const { payload } = await signInUserApi(form);
      if (payload?.accessJWT) {
        localStorage.setItem("refreshJWT", payload.refreshJWT);
        sessionStorage.setItem("accessJWT", payload.accessJWT);
        //call api to get user profile
        dispatch(fetchUserAction());
      }
    } else {
      alert("Please fill all the fields");
    }
  };
  if (showLoaderRef.current) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

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
