import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
export const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* navbar */}
      <Header />
      {/* main body */}
      <main className="main">{children}</main>
      {/* footer */}
      <Footer />
    </div>
  );
};
