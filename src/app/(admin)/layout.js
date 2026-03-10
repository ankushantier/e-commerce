import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

const Adminlayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="main-area">
        <Header />

        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Adminlayout;