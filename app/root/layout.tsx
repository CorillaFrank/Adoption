import React from "react";
import Navbar from "@/Layout/Navbar/Navbar";
export const Rotlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  );
};
export default Rotlayout;
