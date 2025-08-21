import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  DashboardPage,
  SignInPage,
  SignUpPage,
  VerifyUser,
  ForgotPasswordPage,
  DefaultLayout,
  UserLayout,
  Books,
  UsersPage,
} from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* public pages */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="activate-user" element={<VerifyUser />} />
        <Route path="signin" element={<SignInPage />} />
      </Route>

      {/* Private pages */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<DashboardPage />}></Route>
        <Route path="books" element={<Books />}></Route>
        <Route path="users-list" element={<UsersPage />}></Route>
      </Route>
    </Routes>
  );
};
