import React from "react";
import { Outlet } from "react-router-dom";
import ShoppingHeader from "./Header";

const ShoppingLayout = () => {
  return (
    <div className="flex flex-col bg-white w-full">
      {/* main common header */}
      <ShoppingHeader />
      <div>
        <main className="flex flex-col w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ShoppingLayout;
