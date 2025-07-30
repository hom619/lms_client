import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, DashboardPage } from "../pages";
import { DefaultLayout } from "../components/layouts/DefaultLayout";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* public pages */}
      <Route
        path="/"
        element={
          <DefaultLayout>
            <HomePage />
          </DefaultLayout>
        }
      />
      {/* Private pages */}
      <Route path="/user" element={<DashboardPage />} />
    </Routes>
  );
};
