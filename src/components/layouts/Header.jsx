import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { useSelector } from "react-redux";
import { logOutApi } from "@services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "@features/userSlice";
export const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const handleOnLogOut = () => {
    //call api to logout from backend
    logOutApi();
    //logout from front end
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    dispatch(setUser({}));
  };
  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">L.M.S</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Home
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
