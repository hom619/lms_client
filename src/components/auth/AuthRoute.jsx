import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const AuthRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.userInfo);
  const isAuth = user?._id;
  return isAuth ? (
    children
  ) : (
    <Navigate state={{ from: location.pathname }} to="/signin" />
  );
};
