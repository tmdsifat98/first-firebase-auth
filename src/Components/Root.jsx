import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import "../App.css"
const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default Root;
