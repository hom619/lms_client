import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const AuthRoute = ({ children }) => {
  const { user } = useSelector((state) => state.userInfo);
  const isAuth = user?._id;
  return isAuth ? children : <Navigate to="/signin" />;
};
