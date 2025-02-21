import Sidebar from "@/components/admin/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6">{children}</div>
    </div>
  );
};

export default layout;
