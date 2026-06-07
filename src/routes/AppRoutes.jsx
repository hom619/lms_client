import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  DashboardPage,
  SignInPage,
  SignUpPage,
  VerifyUser,
  ForgotPasswordPage,
  Books,
  UsersPage,
} from "../pages";
import { DefaultLayout } from "@components/layouts/DefaultLayout";
import { UserLayout } from "@components/layouts/UserLayout";
import { NewBookPage } from "@pages/books/NewBookPage";
import { EditBookPage } from "@pages/books/EditBookPage";
import { BookLandingPage } from "@pages/books/BookLandingPage";
import { AllBooks } from "@pages/books/AllBooks";
import { SearchBook } from "@components/searchBook/SearchBook";
import { CartPage } from "@pages/cart/CartPage";
import { ThankyouPage } from "@pages/cart/ThankyouPage";
import { BorrowPage } from "@pages/borrow/BorrowPage";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
export const AppRoutes = () => {
  const { user } = useSelector((state) => state.userInfo);
  const noAccess = (
    <div className="p-5">
      {" "}
      <Alert variant="danger">
        <h4 className="text-center py-4">
          {" "}
          Sorry, you don't have access to this page
        </h4>
      </Alert>
    </div>
  );
  const isAdmin = user.role === "admin";
  return (
    <Routes>
      {/* public pages */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="all-books" element={<AllBooks />} />
        <Route path="search" element={<SearchBook />} />
        <Route path="books/:slug" element={<BookLandingPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="activate-user" element={<VerifyUser />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
      </Route>

      {/* Private pages */}
      <Route path="/user" element={<UserLayout />}>
        {/* All user pages */}
        <Route index element={<DashboardPage />}></Route>
        <Route path="my-borrow" element={<BorrowPage />}></Route>
        <Route path="thank-you" element={<ThankyouPage />}></Route>
        {/* Only admin accessible pages */}
        <Route path="books" element={isAdmin ? <Books /> : noAccess}></Route>
        <Route
          path="new-book"
          element={isAdmin ? <NewBookPage /> : noAccess}
        ></Route>
        <Route
          path="edit-book/:_id"
          element={isAdmin ? <EditBookPage /> : noAccess}
        ></Route>
        <Route
          path="users-list"
          element={isAdmin ? <UsersPage /> : noAccess}
        ></Route>
        <Route
          path="borrow-history"
          element={isAdmin ? <BorrowPage isAdmin={isAdmin} /> : noAccess}
        ></Route>
      </Route>
    </Routes>
  );
};
