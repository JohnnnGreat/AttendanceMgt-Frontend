import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function index({ children }) {
  //Layout For the entire application
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
