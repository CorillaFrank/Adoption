import React from "react";
import Footer from "@/Layout/Footer/Footer";
import Navbar from "@/Layout/Navbar/Navbar";
export const Rotlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Rotlayout;
