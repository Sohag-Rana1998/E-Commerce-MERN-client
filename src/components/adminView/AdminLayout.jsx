import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./sidebar";
import AdminHeader from "./header";

const AdminLayout = () => {
  return (
    <div className="w-full min-h-screen flex">
      {/*admin sidebar */}
      <div>
        <AdminSidebar />
      </div>
      <div>
        {/* Admin header */}
        <AdminHeader />
        <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
