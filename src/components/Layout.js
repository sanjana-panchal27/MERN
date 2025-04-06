import React from "react";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "./Footer";

export const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export const AuthLayout = ({ children }) => (
  <div className="auth-layout">{children}</div>
);
