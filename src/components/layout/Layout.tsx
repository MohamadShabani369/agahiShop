import type React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

interface Ilayout {
  children: React.ReactNode;
}

function Layout({ children }: Ilayout) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}

export default Layout;
