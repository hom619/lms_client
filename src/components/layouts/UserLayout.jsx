import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Sidebar } from "./Sidebar";
import { AuthRoute } from "../auth/AuthRoute";
export const UserLayout = () => {
  return (
    <AuthRoute>
      {/* navbar */}
      <Header />
      <div className="d-flex">
        <div className="bg-dark text-white" style={{ width: "200px" }}>
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
