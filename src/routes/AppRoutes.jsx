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
export const AppRoutes = () => {
  return (
    <Routes>
      {/* public pages */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="all-books" element={<AllBooks />} />
        <Route path="search" element={<SearchBook />} />
        <Route path="books/:slug" element={<BookLandingPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="activate-user" element={<VerifyUser />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
      </Route>

      {/* Private pages */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<DashboardPage />}></Route>
        <Route path="books" element={<Books />}></Route>
        <Route path="new-book" element={<NewBookPage />}></Route>
        <Route path="edit-book/:_id" element={<EditBookPage />}></Route>
        <Route path="users-list" element={<UsersPage />}></Route>
      </Route>
    </Routes>
  );
};
