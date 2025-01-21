import React from "react";
import Navbar from "../UI-Comps/Navbar";
import { Outlet } from "react-router-dom";

const NavLayout = () => {
  return (
    <>
      <div className="relative min-h-screen">
        {" "}
        {/* Use min-h-screen instead of h-full */}
        <div className="absolute -z-50 inset-0 min-h-full bg-background bg-[linear-gradient(to_right,#80808012_3px,transparent_3px),linear-gradient(to_bottom,#80808012_3px,transparent_3px)] bg-[size:24px_24px]" />
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default NavLayout;
