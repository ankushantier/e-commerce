import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import AuthGuard from "../../Guards/AuthGuard";

const Adminlayout = ({ children }) => {
  return (
    <AuthGuard>
      <div className="admin-layout">
        <Sidebar />
        <div className="main-area">
          <Header />
          <div className="page-content">
            {children}
          </div>
        </div>
      </div>
    </AuthGuard>
  );
};

export default Adminlayout;