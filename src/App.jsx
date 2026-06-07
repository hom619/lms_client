import { useEffect } from "react";
import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { getAllPublicBooksAction } from "@features/book/bookAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    //fetch all the data and mount in the redux
    dispatch(getAllPublicBooksAction());
  }, [dispatch]);
  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
