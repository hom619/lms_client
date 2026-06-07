import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Sidebar } from "./Sidebar";
import { AuthRoute } from "../auth/AuthRoute";
import { useSelector } from "react-redux";
export const UserLayout = () => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <AuthRoute>
      {/* navbar */}
      <Header />
      <div className="d-flex">
        <div className="bg-dark text-white" style={{ width: "200px" }}>
          <div className="p-3">
            <div>Welcome Back</div>
            <h4>
              {user.fName} ({user.role})
            </h4>
          </div>
          <Sidebar />
        </div>

        {/* main body */}
        <main className="user-main">
          <Outlet />
        </main>
      </div>

      {/* footer */}
      <Footer />
    </AuthRoute>
  );
};
