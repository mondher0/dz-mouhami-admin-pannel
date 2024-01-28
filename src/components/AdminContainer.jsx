import React from "react";
import SideBar from "./SideBar";

const AdminContainer = ({ children }) => {
  return (
    <div className="flex items-start justify-start gap-3">
      <SideBar />
      <main className="w-full flex flex-col items-start justify-center p-5">
        {" "}
        {children}
      </main>
    </div>
  );
};

export default AdminContainer;
