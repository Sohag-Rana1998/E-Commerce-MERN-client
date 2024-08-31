import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full justify-center items-center gap-5">
      <div className="bg-black h-full ">
        <div className="text-4xl font-bold  h-screen text-white flex flex-col justify-center items-center p-5 md:p-10 text-center">
          Welcome to Ecommerce <br /> Shopping
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
