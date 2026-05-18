import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
