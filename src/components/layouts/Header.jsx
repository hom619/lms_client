import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { useSelector } from "react-redux";
import { logOutApi } from "@services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "@features/userSlice";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";
import { GiBookshelf } from "react-icons/gi";

export const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const searchRef = useRef();
  const handleOnLogOut = () => {
    //call api to logout from backend
    logOutApi();
    //logout from front end
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    dispatch(setUser({}));
  };
  const navigate = useNavigate();
  const handleOnSearch = (e) => {
    e.preventDefault();
    const str = searchRef.current.value;
    str && navigate("/search?query=" + str);
  };
  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">L.M.S</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="w-100 d-flex justify-content-between flex-column flex-md-row">
            <div></div>
            <Form style={{ width: "40%" }} onSubmit={handleOnSearch}>
              {" "}
              <InputGroup>
                <Form.Control
                  placeholder="Search Book"
                  aria-label="Search Book"
                  aria-describedby="basic-addon2"
                  name="query"
                  ref={searchRef}
                />
                <InputGroup.Text id="basic-addon2" as="button">
                  <FaSearch />
                </InputGroup.Text>
              </InputGroup>
            </Form>

            <Nav>
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/all-books">
                <GiBookshelf /> Books
              </Link>
              {user?._id ? (
                <>
                  <Link className="nav-link" to="/user">
                    <AiOutlineDashboard />
                    Dashboard
                  </Link>
                  <Link className="nav-link" to="/" onClick={handleOnLogOut}>
                    <IoLogOutOutline />
                    LogOut
                  </Link>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                </>
              )}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
